import React from 'react';
import { ArrowRight, Smartphone, Laptop, Tablet, Headphones, Watch, Cpu } from 'lucide-react';
import { CategoryInfo } from '../types';

interface CategoryCardProps {
  category: CategoryInfo;
  onSelectCategory: (slug: string) => void;
}

/**
 * ============================================================================
 * SEMANTIC HTML5 TAG: <article>
 * Vai trò: Đại diện cho một đơn vị danh mục sản phẩm độc lập. Mỗi danh mục
 * có thể đứng độc lập như một thẻ phân loại giới thiệu nhóm thiết bị.
 * ============================================================================
 */
export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelectCategory
}) => {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-blue-600' };
    switch (iconName) {
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Tablet': return <Tablet {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      case 'Watch': return <Watch {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    /* <!-- <article>: Thẻ danh mục độc lập trong phân khu danh mục sản phẩm --> */
    <article
      id={`category-card-${category.slug}`}
      className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden cursor-pointer"
      onClick={() => onSelectCategory(category.slug)}
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <div className="group-hover:text-white transition-colors">
            {renderIcon(category.iconName)}
          </div>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
          {category.itemCount} sản phẩm
        </span>
      </div>

      <div className="mt-4">
        <h4 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h4>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          id={`btn-view-cat-${category.slug}`}
          className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center space-x-1"
        >
          <span>Xem sản phẩm</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};
