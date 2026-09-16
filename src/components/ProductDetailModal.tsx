import React, { useState } from 'react';
import { X, Star, ShoppingCart, ShieldCheck, Truck, RotateCcw, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { formatVND } from '../data/mockData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="close-detail-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Image */}
          <div className="space-y-4">
            <div className="relative pt-[90%] bg-slate-100 rounded-xl overflow-hidden border border-slate-200/80">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.discountPercent && (
                <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                  Giảm {product.discountPercent}%
                </span>
              )}
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                <Truck className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span>Giao nhanh 2H</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span>Bảo hành 12T</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                <RotateCcw className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <span>Đổi lỗi 30 ngày</span>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
                <span>{product.brand}</span>
                <span>•</span>
                <span>{product.categoryName}</span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h2>

              {/* Star Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs font-bold text-slate-800">{product.rating} / 5.0</span>
                <span className="text-xs text-slate-400">({product.reviewCount} đánh giá từ người mua)</span>
              </div>

              {/* Price */}
              <div className="mt-4 p-3.5 bg-blue-50/60 rounded-xl border border-blue-100/80 flex items-baseline gap-3 flex-wrap">
                <span className="text-2xl font-extrabold text-blue-700">
                  {formatVND(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatVND(product.originalPrice)}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                    Tiết kiệm {formatVND(product.originalPrice! - product.price)}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mô tả sản phẩm
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Thông số kỹ thuật
                </h4>
                <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden text-xs">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-1.5 px-3 font-medium text-slate-500 border-b border-slate-100 w-1/3">
                            {key}
                          </td>
                          <td className="py-1.5 px-3 text-slate-800 border-b border-slate-100">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-slate-600 hover:bg-slate-200 text-sm font-bold transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 py-2 text-xs font-bold text-slate-800 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-slate-600 hover:bg-slate-200 text-sm font-bold transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                id="modal-add-to-cart-btn"
                disabled={!product.inStock}
                onClick={handleAdd}
                className={`flex-1 w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  isAdded
                    ? 'bg-emerald-600 text-white shadow-md'
                    : product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-98'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Đã thêm vào giỏ thành công!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>{product.inStock ? 'Thêm vào giỏ hàng' : 'Sản phẩm tạm hết hàng'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
