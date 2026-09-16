import React from 'react';
import { Star, ShoppingCart, Eye, Tag } from 'lucide-react';
import { Product } from '../types';
import { formatVND } from '../data/mockData';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

/**
 * ============================================================================
 * SEMANTIC HTML5 TAG: <article>
 * Vai trò: Đại diện cho một khối nội dung sản phẩm hoàn chỉnh, độc lập và có thể
 * tái sử dụng ở bất kỳ đâu (như trong danh sách nổi bật, sản phẩm mới, tìm kiếm).
 * ============================================================================
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails
}) => {
  return (
    /* <!-- <article>: Đại diện cho một thẻ sản phẩm điện tử độc lập --> */
    <article
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Product Image & Badges */}
      <div className="relative pt-[80%] bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges: Discount / New / Out of Stock */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.discountPercent && (
            <span className="inline-flex items-center space-x-0.5 bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              <Tag className="w-3 h-3 mr-0.5" />
              -{product.discountPercent}%
            </span>
          )}
          {product.isNew && (
            <span className="inline-block bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              MỚI
            </span>
          )}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center">
            <span className="bg-slate-800 text-white text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
              Tạm hết hàng
            </span>
          </div>
        )}

        {/* Quick view button overlay */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            id={`quick-view-${product.id}`}
            onClick={() => onViewDetails(product)}
            className="px-3.5 py-1.5 bg-white/95 text-slate-800 hover:text-blue-600 rounded-lg text-xs font-semibold shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Xem nhanh</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="font-semibold uppercase tracking-wider text-blue-600">{product.brand}</span>
            <span>{product.categoryName}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-sm font-semibold text-slate-800 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer min-h-[40px]"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Star Rating & Review Count */}
          <div className="flex items-center space-x-1.5 mt-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>

          {/* Price Block */}
          <div className="mt-3 flex items-baseline gap-2 flex-wrap">
            <span className="text-base font-bold text-blue-600">
              {formatVND(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formatVND(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons: Thêm vào giỏ & Xem chi tiết */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            id={`view-detail-btn-${product.id}`}
            onClick={() => onViewDetails(product)}
            className="flex-1 px-2.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-xl transition-colors text-center cursor-pointer"
          >
            Chi tiết
          </button>
          
          <button
            id={`add-to-cart-btn-${product.id}`}
            disabled={!product.inStock}
            onClick={() => onAddToCart(product)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition-all ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs cursor-pointer active:scale-95'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            title={product.inStock ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Thêm</span>
          </button>
        </div>
      </div>
    </article>
  );
};
