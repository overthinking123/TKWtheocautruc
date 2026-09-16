import React from 'react';
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  RefreshCw, 
  CreditCard, 
  Headphones, 
  Clock, 
  Truck
} from 'lucide-react';
import { NAV_ITEMS } from '../data/mockData';

interface FooterProps {
  onSelectCategory: (slug: string) => void;
}

/**
 * ============================================================================
 * SEMANTIC HTML5 TAG: <footer>
 * Vai trò: Chứa thông tin chân trang bao gồm giới thiệu cửa hàng, chính sách
 * bảo hành & đổi trả, hỗ trợ khách hàng, kênh liên hệ và bản quyền thương hiệu.
 * ============================================================================
 */
export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    /* <!-- <footer>: Thông tin kết trang, chính sách và liên hệ --> */
    <footer id="main-footer" className="bg-slate-900 text-slate-300 mt-16 border-t border-slate-800">
      
      {/* Policy highlights bar */}
      <div className="border-b border-slate-800 py-8 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Giao hàng hoả tốc 2H</h5>
                <p className="text-xs text-slate-400">Nội thành miễn phí vận chuyển</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Cam kết chính hãng 100%</h5>
                <p className="text-xs text-slate-400">Bảo hành 12 - 24 tháng toàn quốc</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Đổi mới trong 30 ngày</h5>
                <p className="text-xs text-slate-400">Lỗi 1 đổi 1 nếu có phát sinh từ NSX</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Thanh toán linh hoạt</h5>
                <p className="text-xs text-slate-400">Hỗ trợ trả góp 0% qua thẻ tín dụng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer navigation columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Cột 1: Thông tin cửa hàng */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Electro<span className="text-blue-400">Store</span>
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Hệ thống bán lẻ thiết bị công nghệ chính hãng hàng đầu Việt Nam. Cung cấp smartphone, laptop, tablet, tai nghe và phụ kiện điện tử với mức giá cạnh tranh và trải nghiệm mua sắm chuẩn mực.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Số 128 Đường Xuân Thuỷ, Cầu Giấy, Hà Nội</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>1800 6868 (Tư vấn miễn phí 8:00 - 22:00)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@electrostore.vn</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Danh mục sản phẩm */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Danh mục sản phẩm
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.filter(item => item.slug !== 'all' && item.slug !== 'promo').map((item) => (
                <li key={`footer-cat-${item.slug}`}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(item.slug)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('promo')}
                  className="text-rose-400 hover:text-rose-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Khuyến mãi đặc biệt
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hỗ trợ khách hàng
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer transition-colors">Hướng dẫn mua hàng online</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Tra cứu đơn hàng</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Giao hàng & Lắp đặt tại nhà</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Quy định gửi bảo hành</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Hóa đơn điện tử VAT</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Câu hỏi thường gặp (FAQ)</span></li>
            </ul>
          </div>

          {/* Cột 4: Chính sách & Thanh toán */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Chính sách & Thanh toán
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 mb-4">
              <li><span className="hover:text-white cursor-pointer transition-colors">Chính sách đổi trả 30 ngày</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Chính sách bảo hành chính hãng</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Chính sách bảo mật thông tin</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Quy chế hoạt động sàn TMĐT</span></li>
            </ul>

            <h5 className="text-[11px] font-semibold text-slate-300 uppercase mb-2">Phương thức thanh toán</h5>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Visa / Master</span>
              <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">ATM Nội Địa</span>
              <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Ví MoMo</span>
              <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">COD (Tiền mặt)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ElectroStore. Tất cả các quyền được bảo lưu.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Chính sách bảo mật</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Điều khoản dịch vụ</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
