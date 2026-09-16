import React, { useState } from 'react';
import { ShoppingBag, Search, User, LogIn, Cpu, X, Check } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  user: UserProfile;
  onLogout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (category: string) => void;
}

/**
 * ============================================================================
 * SEMANTIC HTML5 TAG: <header>
 * Vai trò: Chứa thông tin nhận diện thương hiệu đầu trang (Logo, Tên shop),
 * công cụ tìm kiếm sản phẩm và các tiện ích tài khoản, giỏ hàng của người dùng.
 * ============================================================================
 */
export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAuth,
  user,
  onLogout,
  searchQuery,
  onSearchChange,
  onSelectCategory
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
  };

  const handleClearSearch = () => {
    setLocalSearch('');
    onSearchChange('');
  };

  return (
    /* <!-- <header>: Thông tin đầu trang, logo và công cụ chính --> */
    <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro-bar for hotline & semantic notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>🔥 Giảm giá mùa hè tới 35% cho thiết bị công nghệ</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline">Hotline: <strong className="text-white">1800 6868</strong> (Miễn phí)</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400">
            <span className="hidden md:inline">Giao hàng 2H toàn quốc</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Logo shop & Tên cửa hàng */}
          <button
            id="logo-brand-button"
            onClick={() => {
              onSelectCategory('all');
              handleClearSearch();
            }}
            className="flex items-center space-x-2.5 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center">
                Electro<span className="text-blue-600">Store</span>
              </span>
              <p className="text-[11px] text-slate-500 leading-none">Thiết bị điện tử chính hãng</p>
            </div>
          </button>

          {/* Thanh tìm kiếm sản phẩm */}
          <form 
            id="search-form" 
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-xl relative hidden sm:block"
          >
            <div className="relative flex items-center">
              <input
                id="search-input"
                type="text"
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  onSearchChange(e.target.value);
                }}
                placeholder="Tìm smartphone, laptop, tai nghe, phụ kiện..."
                className="w-full pl-10 pr-20 py-2.5 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all outline-hidden"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              
              {localSearch && (
                <button
                  type="button"
                  id="clear-search-btn"
                  onClick={handleClearSearch}
                  className="absolute right-12 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                id="submit-search-btn"
                type="submit"
                className="absolute right-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                Tìm
              </button>
            </div>
          </form>

          {/* Đăng nhập / Đăng ký & Giỏ hàng */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* User Profile / Auth Button */}
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 rounded-xl border border-slate-200/80">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className="text-xs font-semibold text-slate-800 leading-tight truncate max-w-[100px]">{user.name}</p>
                    <p className="text-[10px] text-green-600 font-medium">Khách hàng VIP</p>
                  </div>
                </div>
                <button
                  id="logout-btn"
                  onClick={onLogout}
                  className="text-xs text-slate-500 hover:text-rose-600 px-2 py-1 transition-colors"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  id="login-btn"
                  onClick={onOpenAuth}
                  className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <LogIn className="w-4 h-4 text-slate-500" />
                  <span>Đăng nhập</span>
                </button>
                <button
                  id="register-btn"
                  onClick={onOpenAuth}
                  className="hidden sm:inline-flex items-center px-3 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200/60 transition-colors"
                >
                  Đăng ký
                </button>
              </div>
            )}

            {/* Giỏ hàng với số lượng sản phẩm */}
            <button
              id="cart-button"
              onClick={onOpenCart}
              className="relative p-2.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl border border-slate-200/70 transition-all group focus:outline-hidden"
              aria-label={`Giỏ hàng có ${cartCount} sản phẩm`}
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
              {cartCount > 0 && (
                <span 
                  id="cart-badge-count" 
                  className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[11px] font-bold rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center shadow-xs border-2 border-white animate-in zoom-in-50"
                >
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-2.5 sm:hidden">
          <form id="mobile-search-form" onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              id="mobile-search-input"
              type="text"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                onSearchChange(e.target.value);
              }}
              placeholder="Tìm kiếm sản phẩm điện tử..."
              className="w-full pl-9 pr-14 py-2 bg-slate-100 text-xs text-slate-900 rounded-lg border border-slate-200 outline-hidden focus:border-blue-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-1 px-2.5 py-1 bg-blue-600 text-white rounded text-[11px] font-medium"
            >
              Tìm
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
