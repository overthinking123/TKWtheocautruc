import React from 'react';
import { 
  Home, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones, 
  Watch, 
  Cpu, 
  Flame 
} from 'lucide-react';
import { NAV_ITEMS } from '../data/mockData';

interface NavigationProps {
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
  showSemanticInfo?: boolean;
}

/**
 * ============================================================================
 * SEMANTIC HTML5 TAG: <nav>
 * Vai trò: Khối điều hướng chính của trang web. Chứa các liên kết danh mục
 * sản phẩm công nghệ giúp người dùng chuyển đổi nhanh giữa các nhóm mặt hàng.
 * ============================================================================
 */
export const Navigation: React.FC<NavigationProps> = ({
  activeCategory,
  onSelectCategory,
  showSemanticInfo = false
}) => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'all': return <Home className="w-4 h-4" />;
      case 'phone': return <Smartphone className="w-4 h-4" />;
      case 'laptop': return <Laptop className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      case 'headphone': return <Headphones className="w-4 h-4" />;
      case 'smartwatch': return <Watch className="w-4 h-4" />;
      case 'accessory': return <Cpu className="w-4 h-4" />;
      case 'promo': return <Flame className="w-4 h-4 text-rose-500 animate-pulse" />;
      default: return null;
    }
  };

  return (
    /* <!-- <nav>: Điều hướng các danh mục sản phẩm chính của shop --> */
    <nav id="main-navigation" aria-label="Danh mục sản phẩm điện tử" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeCategory === item.slug;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  id={`nav-item-${item.slug}`}
                  onClick={() => onSelectCategory(item.slug)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-500'}>
                    {getIcon(item.slug)}
                  </span>
                  <span>{item.label}</span>
                  {item.slug === 'promo' && (
                    <span className="ml-1 text-[10px] bg-rose-500 text-white px-1.5 py-0.2 rounded-full font-bold">
                      HOT
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
