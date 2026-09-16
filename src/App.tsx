import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowUpDown, 
  Search, 
  Flame, 
  Package, 
  Layers, 
  Check, 
  SlidersHorizontal, 
  X 
} from 'lucide-react';
import { Product, CartItem, FilterOptions, UserProfile } from './types';
import { PRODUCTS_DATA, CATEGORIES_DATA } from './data/mockData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ProductCard } from './components/ProductCard';
import { CategoryCard } from './components/CategoryCard';
import { SidebarAside } from './components/SidebarAside';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';

/**
 * ============================================================================
 * KIẾN TRÚC TỔNG QUAN SEMANTIC HTML5 CỦA ELECTROSTORE:
 * 
 * <html>
 * └── <body>
 *     ├── <header>: Nhận diện shop, tìm kiếm, tài khoản & giỏ hàng
 *     ├── <nav>: Thanh điều hướng các danh mục sản phẩm chính
 *     ├── <main>: Nội dung trọng tâm của cửa hàng
 *     │   ├── <section>: Khu vực sản phẩm nổi bật
 *     │   │   └── <article>: Thẻ sản phẩm nổi bật độc lập
 *     │   ├── <section>: Danh mục sản phẩm
 *     │   │   └── <article>: Thẻ danh mục độc lập
 *     │   ├── <section>: Sản phẩm mới
 *     │   │   └── <article>: Thẻ sản phẩm mới độc lập
 *     │   └── <aside>: Khối nội dung bổ trợ (Bộ lọc, Khuyến mãi, Bán chạy)
 *     └── <footer>: Thông tin liên hệ, chính sách, bản quyền
 * ============================================================================
 */

export default function App() {
  // State quản lý bộ lọc
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    category: 'all',
    priceRange: 'all',
    brand: 'all',
    minRating: 0,
    inStockOnly: false,
    sortBy: 'featured'
  });

  // State giỏ hàng
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State chi tiết sản phẩm
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // State tài khoản
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<UserProfile>({
    name: 'Khách hàng',
    email: '',
    isLoggedIn: false
  });

  // Toast thông báo tương tác
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Quản lý hiển thị bộ lọc dạng modal trên thiết bị di động
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Thêm vào giỏ hàng
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    triggerToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  // Cập nhật số lượng giỏ hàng
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Xoá sản phẩm khỏi giỏ
  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    triggerToast('Đã xoá sản phẩm khỏi giỏ hàng.');
  };

  // Cập nhật bộ lọc
  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Đặt lại bộ lọc
  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      priceRange: 'all',
      brand: 'all',
      minRating: 0,
      inStockOnly: false,
      sortBy: 'featured'
    });
    triggerToast('Đã đặt lại tất cả bộ lọc');
  };

  // Tổng số lượng sản phẩm trong giỏ
  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Lọc danh sách sản phẩm theo bộ lọc hiện tại
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(prod => {
      // Tìm kiếm từ khóa
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchName = prod.name.toLowerCase().includes(query);
        const matchBrand = prod.brand.toLowerCase().includes(query);
        const matchCat = prod.categoryName.toLowerCase().includes(query);
        if (!matchName && !matchBrand && !matchCat) return false;
      }

      // Danh mục
      if (filters.category !== 'all') {
        if (filters.category === 'promo') {
          if (!prod.discountPercent || prod.discountPercent <= 0) return false;
        } else if (prod.category !== filters.category) {
          return false;
        }
      }

      // Thương hiệu
      if (filters.brand !== 'all' && prod.brand !== filters.brand) {
        return false;
      }

      // Đánh giá sao
      if (filters.minRating > 0 && prod.rating < filters.minRating) {
        return false;
      }

      // Tình trạng còn hàng
      if (filters.inStockOnly && !prod.inStock) {
        return false;
      }

      // Khoảng giá
      if (filters.priceRange === 'under-5m' && prod.price >= 5000000) return false;
      if (filters.priceRange === '5m-15m' && (prod.price < 5000000 || prod.price > 15000000)) return false;
      if (filters.priceRange === '15m-30m' && (prod.price < 15000000 || prod.price > 30000000)) return false;
      if (filters.priceRange === 'over-30m' && prod.price <= 30000000) return false;

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating-desc') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0;
    });
  }, [filters]);

  // Phân chia dữ liệu theo các Section trong trường hợp hiển thị toàn bộ
  const featuredProducts = useMemo(() => {
    return filteredProducts.filter(p => p.isFeatured || p.isBestSeller);
  }, [filteredProducts]);

  const newProducts = useMemo(() => {
    return filteredProducts.filter(p => p.isNew || !p.isFeatured);
  }, [filteredProducts]);

  // Khuyến mãi & Bán chạy cho Aside
  const promoProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(p => p.discountPercent && p.discountPercent > 15);
  }, []);

  const bestSellerProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(p => p.isBestSeller);
  }, []);

  const isFiltered = filters.category !== 'all' || 
                     filters.priceRange !== 'all' || 
                     filters.brand !== 'all' || 
                     filters.minRating > 0 || 
                     filters.inStockOnly || 
                     filters.searchQuery.trim() !== '';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 selection:bg-blue-600 selection:text-white">
      
      {/* ============================================================== */}
      {/* 1. HEADER CHÍNH                                                */}
      {/* ============================================================== */}
      {/* <!-- <header>: Thông tin đầu trang, logo, thanh tìm kiếm, giỏ hàng --> */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        user={user}
        onLogout={() => {
          setUser({ name: 'Khách hàng', email: '', isLoggedIn: false });
          triggerToast('Đã đăng xuất thành công.');
        }}
        searchQuery={filters.searchQuery}
        onSearchChange={(query) => handleFilterChange({ searchQuery: query })}
        onSelectCategory={(slug) => handleFilterChange({ category: slug })}
      />

      {/* ============================================================== */}
      {/* 2. NAVIGATION DANH MỤC                                         */}
      {/* ============================================================== */}
      {/* <!-- <nav>: Điều hướng danh mục sản phẩm --> */}
      <Navigation
        activeCategory={filters.category}
        onSelectCategory={(slug) => handleFilterChange({ category: slug })}
      />

      {/* ============================================================== */}
      {/* 3. MAIN - NỘI DUNG CHÍNH CỦA SHOP                              */}
      {/* ============================================================== */}
      {/* <!-- <main>: Nội dung chính chứa các <section>, <article> và <aside> --> */}
      <main
        id="main-content"
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Sort & Filter Bar for Mobile / Compact view */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500">Hiển thị:</span>
            <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg">
              {filteredProducts.length} sản phẩm
            </span>
            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center space-x-1 cursor-pointer ml-2"
              >
                <X className="w-3.5 h-3.5" />
                <span>Xóa bộ lọc</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Toggle */}
            <button
              type="button"
              id="mobile-filter-open-btn"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              <span>Bộ lọc & Khuyến mãi</span>
            </button>

            {/* Sắp xếp sản phẩm */}
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
              <label htmlFor="sort-select" className="text-xs font-medium text-slate-600 hidden sm:inline">
                Sắp xếp:
              </label>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange({ sortBy: e.target.value as any })}
                className="text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border-none rounded-xl py-1.5 px-3 focus:ring-2 focus:ring-blue-500 outline-hidden cursor-pointer"
              >
                <option value="featured">Nổi bật nhất</option>
                <option value="price-asc">Giá: Thấp → Cao</option>
                <option value="price-desc">Giá: Cao → Thấp</option>
                <option value="rating-desc">Đánh giá cao nhất</option>
                <option value="newest">Sản phẩm mới</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cấu trúc cây: Flex container chứa các <section> bên trái và <aside> bên phải */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* CỘT CÁC <section> NỘI DUNG CHÍNH */}
          <div className="flex-1 w-full space-y-12">
            
            {/* ============================================================== */}
            {/* 3.1 SECTION: KHU VỰC SẢN PHẨM NỔI BẬT                         */}
            {/* ============================================================== */}
            {/* <!-- <section>: Khu vực sản phẩm nổi bật --> */}
            <section
              id="featured-products-section"
              aria-labelledby="featured-products-heading"
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h2 id="featured-products-heading" className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      Sản Phẩm Nổi Bật
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Các thiết bị công nghệ bán chạy và được đánh giá cao nhất trong tháng
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {featuredProducts.length} mẫu
                </span>
              </div>

              {featuredProducts.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400">
                  Không tìm thấy sản phẩm nổi bật phù hợp với tiêu chí lọc.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                  {featuredProducts.slice(0, 4).map((product) => (
                    /* <!-- <article>: Thẻ sản phẩm độc lập --> */
                    <ProductCard
                      key={`featured-${product.id}`}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewDetails={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* ============================================================== */}
            {/* 3.2 SECTION: DANH MỤC SẢN PHẨM                                */}
            {/* ============================================================== */}
            {/* <!-- <section>: Danh mục sản phẩm --> */}
            <section
              id="categories-section"
              aria-labelledby="categories-heading"
              className="bg-slate-100/70 rounded-3xl border border-slate-200/80 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <h2 id="categories-heading" className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      Danh Mục Sản Phẩm
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Khám phá hệ sinh thái thiết bị điện tử đa dạng chính hãng
                  </p>
                </div>
              </div>

              {/* Grid các <article> cho từng danh mục */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {CATEGORIES_DATA.map((category) => (
                  /* <!-- <article>: Thẻ danh mục độc lập --> */
                  <CategoryCard
                    key={`cat-${category.id}`}
                    category={category}
                    onSelectCategory={(slug) => handleFilterChange({ category: slug })}
                  />
                ))}
              </div>
            </section>

            {/* ============================================================== */}
            {/* 3.3 SECTION: SẢN PHẨM MỚI                                      */}
            {/* ============================================================== */}
            {/* <!-- <section>: Sản phẩm mới --> */}
            <section
              id="new-products-section"
              aria-labelledby="new-products-heading"
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-5 h-5 text-emerald-600" />
                    <h2 id="new-products-heading" className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      Sản Phẩm Mới &amp; Đề Xuất
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Công nghệ mới nhất vừa ra mắt với ưu đãi thành viên
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  {newProducts.length} sản phẩm
                </span>
              </div>

              {newProducts.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400">
                  Không tìm thấy sản phẩm mới phù hợp với bộ lọc.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {newProducts.map((product) => (
                    /* <!-- <article>: Thẻ sản phẩm độc lập --> */
                    <ProductCard
                      key={`new-${product.id}`}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewDetails={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </section>

          </div>

          {/* ============================================================== */}
          {/* 3.4 ASIDE - NỘI DUNG BỔ TRỢ (BỘ LỌC, KHUYẾN MÃI, BÁN CHẠY)      */}
          {/* ============================================================== */}
          {/* <!-- <aside>: Khối nội dung bổ trợ cho nội dung chính --> */}
          <div className="hidden lg:block">
            <SidebarAside
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              promotions={promoProducts}
              bestSellers={bestSellerProducts}
              onViewProduct={setSelectedProduct}
              onAddToCart={handleAddToCart}
            />
          </div>

        </div>

        {/* Mobile Aside Drawer */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
            <div className="w-full max-w-sm bg-white h-full overflow-y-auto p-5 relative animate-in slide-in-from-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <h3 className="font-bold text-slate-900 text-sm">Bộ Lọc &amp; Tiện Ích Bổ Trợ</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <SidebarAside
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                promotions={promoProducts}
                bestSellers={bestSellerProducts}
                onViewProduct={(p) => {
                  setSelectedProduct(p);
                  setIsMobileFilterOpen(false);
                }}
                onAddToCart={(p) => {
                  handleAddToCart(p);
                  setIsMobileFilterOpen(false);
                }}
              />
            </div>
          </div>
        )}

      </main>

      {/* ============================================================== */}
      {/* 4. FOOTER                                                      */}
      {/* ============================================================== */}
      {/* <!-- <footer>: Thông tin chân trang, hỗ trợ, chính sách, liên hệ --> */}
      <Footer onSelectCategory={(slug) => handleFilterChange({ category: slug })} />

      {/* MODALS */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(loggedUser) => {
          setUser(loggedUser);
          triggerToast(`Chào mừng ${loggedUser.name}!`);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2 border border-slate-700 animate-in slide-in-from-bottom-5 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
