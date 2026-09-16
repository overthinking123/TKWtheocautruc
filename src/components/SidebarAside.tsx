import React from 'react';
import { 
  Filter, 
  RotateCcw, 
  Star, 
  Flame, 
  TrendingUp, 
  Check, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { FilterOptions, Product } from '../types';
import { BRANDS, formatVND } from '../data/mockData';

interface SidebarAsideProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: Partial<FilterOptions>) => void;
  onResetFilters: () => void;
  promotions: Product[];
  bestSellers: Product[];
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

/**
 * ============================================================================
 * SEMANTIC HTML5 TAG: <aside>
 * Vai trò: Chứa nội dung bổ trợ gián tiếp cho nội dung chính của trang web.
 * Bao gồm:
 *  1. Bộ lọc sản phẩm đa tiêu chí (giá, thương hiệu, đánh giá, kho hàng)
 *  2. Khối khuyến mãi nổi bật (Flash Deals)
 *  3. Danh sách sản phẩm bán chạy (Top Sellers)
 * ============================================================================
 */
export const SidebarAside: React.FC<SidebarAsideProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  promotions,
  bestSellers,
  onViewProduct,
  onAddToCart
}) => {
  const priceOptions = [
    { value: 'all', label: 'Tất cả mức giá' },
    { value: 'under-5m', label: 'Dưới 5 triệu' },
    { value: '5m-15m', label: '5 - 15 triệu' },
    { value: '15m-30m', label: '15 - 30 triệu' },
    { value: 'over-30m', label: 'Trên 30 triệu' }
  ];

  const ratingOptions = [
    { value: 0, label: 'Tất cả đánh giá' },
    { value: 4, label: 'Từ 4.0 sao trở lên' },
    { value: 4.8, label: 'Từ 4.8 sao xuất sắc' }
  ];

  return (
    /* <!-- <aside>: Khối nội dung bổ trợ (Bộ lọc, Khuyến mãi, Sản phẩm bán chạy) --> */
    <aside
      id="store-aside-sidebar"
      aria-label="Bộ lọc và thông tin khuyến mãi bổ trợ"
      className="w-full lg:w-80 shrink-0 space-y-6"
    >
      {/* 1. BỘ LỌC SẢN PHẨM */}
      <section
        id="aside-filters-section"
        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs"
      >
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm">
            <Filter className="w-4 h-4 text-blue-600" />
            <span>Bộ Lọc Sản Phẩm</span>
          </div>
          <button
            type="button"
            id="reset-filters-btn"
            onClick={onResetFilters}
            className="text-xs text-blue-600 hover:text-blue-700 flex items-center space-x-1 font-medium cursor-pointer"
            title="Xoá tất cả bộ lọc"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Đặt lại</span>
          </button>
        </div>

        <div className="space-y-5">
          {/* Khoảng giá */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Khoảng giá
            </label>
            <div className="space-y-1.5">
              {priceOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center space-x-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer py-1 px-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    value={opt.value}
                    checked={filters.priceRange === opt.value}
                    onChange={(e) => onFilterChange({ priceRange: e.target.value })}
                    className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Thương hiệu */}
          <div className="pt-3 border-t border-slate-100">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Thương hiệu
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                id="brand-filter-all"
                onClick={() => onFilterChange({ brand: 'all' })}
                className={`text-xs py-1.5 px-2 rounded-lg font-medium border text-center transition-all ${
                  filters.brand === 'all'
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Tất cả
              </button>
              {BRANDS.map((brand) => (
                <button
                  type="button"
                  key={brand}
                  id={`brand-filter-${brand.toLowerCase()}`}
                  onClick={() => onFilterChange({ brand: filters.brand === brand ? 'all' : brand })}
                  className={`text-xs py-1.5 px-2 rounded-lg font-medium border text-center transition-all ${
                    filters.brand === brand
                      ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Đánh giá sao */}
          <div className="pt-3 border-t border-slate-100">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Mức đánh giá
            </label>
            <div className="space-y-1.5">
              {ratingOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center space-x-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer py-1 px-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="minRating"
                    value={opt.value}
                    checked={filters.minRating === opt.value}
                    onChange={() => onFilterChange({ minRating: opt.value })}
                    className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <div className="flex items-center space-x-1">
                    {opt.value > 0 && <Star className="w-3 h-3 text-amber-400 fill-current" />}
                    <span>{opt.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Tình trạng còn hàng */}
          <div className="pt-3 border-t border-slate-100">
            <label className="flex items-center space-x-2.5 text-xs text-slate-700 font-medium cursor-pointer">
              <input
                type="checkbox"
                id="in-stock-checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span>Chỉ hiển thị sản phẩm còn hàng</span>
            </label>
          </div>
        </div>
      </section>

      {/* 2. KHUYẾN MÃI (Flash Deals) */}
      <section
        id="aside-promotions-section"
        className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl border border-rose-200/80 p-5 shadow-xs"
      >
        <div className="flex items-center justify-between pb-3 border-b border-rose-200/60 mb-3">
          <div className="flex items-center space-x-2 text-rose-800 font-bold text-sm">
            <Flame className="w-4 h-4 text-rose-600 fill-rose-500 animate-bounce" />
            <span>Khuyến Mãi Hot</span>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wide bg-rose-600 text-white px-2 py-0.5 rounded-full">
            Flash Sale
          </span>
        </div>

        <div className="space-y-3">
          {promotions.slice(0, 3).map((prod) => (
            <article
              key={`aside-promo-${prod.id}`}
              id={`aside-promo-${prod.id}`}
              className="bg-white rounded-xl p-2.5 border border-rose-100 flex items-center space-x-3 hover:shadow-xs transition-all cursor-pointer group"
              onClick={() => onViewProduct(prod)}
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-14 h-14 object-cover rounded-lg bg-slate-100 shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-semibold text-slate-800 truncate group-hover:text-rose-600 transition-colors">
                  {prod.name}
                </h5>
                <div className="flex items-baseline space-x-1.5 mt-1">
                  <span className="text-xs font-bold text-rose-600">
                    {formatVND(prod.price)}
                  </span>
                  {prod.discountPercent && (
                    <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-1 rounded">
                      -{prod.discountPercent}%
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">Tiết kiệm ngay!</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. SẢN PHẨM BÁN CHẠY (Best Sellers) */}
      <section
        id="aside-bestsellers-section"
        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs"
      >
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm pb-3 border-b border-slate-100 mb-3">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span>Sản Phẩm Bán Chạy</span>
        </div>

        <div className="space-y-3">
          {bestSellers.slice(0, 3).map((prod, index) => (
            <article
              key={`aside-bestseller-${prod.id}`}
              id={`aside-bestseller-${prod.id}`}
              className="group flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              onClick={() => onViewProduct(prod)}
            >
              <div className="relative">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-12 h-12 object-cover rounded-lg bg-slate-100 shrink-0"
                />
                <span className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                  {prod.name}
                </h5>
                <div className="flex items-center space-x-2 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">
                    {formatVND(prod.price)}
                  </span>
                  <div className="flex items-center text-[10px] text-amber-500 font-bold">
                    <Star className="w-2.5 h-2.5 fill-current mr-0.5" />
                    {prod.rating}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
};
