import { CategoryInfo, Product } from '../types';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'cat-1',
    slug: 'phone',
    name: 'Điện thoại',
    itemCount: 24,
    iconName: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    description: 'Smartphone cao cấp, pin khủng, camera sắc nét'
  },
  {
    id: 'cat-2',
    slug: 'laptop',
    name: 'Laptop',
    itemCount: 18,
    iconName: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    description: 'Laptop văn phòng, đồ hoạ & gaming cấu hình cao'
  },
  {
    id: 'cat-3',
    slug: 'tablet',
    name: 'Tablet',
    itemCount: 12,
    iconName: 'Tablet',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
    description: 'Máy tính bảng phục vụ học tập, làm việc sáng tạo'
  },
  {
    id: 'cat-4',
    slug: 'headphone',
    name: 'Tai nghe',
    itemCount: 30,
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'Tai nghe Bluetooth chống ồn, âm thanh Hi-Res chân thực'
  },
  {
    id: 'cat-5',
    slug: 'smartwatch',
    name: 'Đồng hồ thông minh',
    itemCount: 15,
    iconName: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    description: 'Theo dõi sức khoẻ, đo nhịp tim & thông báo tức thì'
  },
  {
    id: 'cat-6',
    slug: 'accessory',
    name: 'Phụ kiện',
    itemCount: 45,
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80',
    description: 'Bàn phím cơ, chuột không dây, củ sạc nhanh & màn hình'
  }
];

export const PRODUCTS_DATA: Product[] = [
  // FEATURED PRODUCTS (Sản phẩm nổi bật)
  {
    id: 'prod-1',
    name: 'Smartphone Pro Max Ultra 5G',
    category: 'phone',
    categoryName: 'Điện thoại',
    price: 28990000,
    originalPrice: 32990000,
    discountPercent: 12,
    rating: 4.9,
    reviewCount: 148,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
    brand: 'Apple',
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    description: 'Màn hình OLED 6.7 inch Super Retina XDR 120Hz, vi xử lý tiến trình 3nm thế hệ mới nhất, camera chụp đêm siêu nét 48MP và khung viền Titan siêu bền nhẹ.',
    specs: {
      'Màn hình': '6.7" OLED Super Retina XDR 120Hz',
      'Vi xử lý': 'Hexa-core 3nm Gen 3',
      'RAM': '12GB',
      'Bộ nhớ trong': '256GB',
      'Camera sau': 'Chính 48MP + Góc rộng 12MP + Tele 12MP 5x',
      'Pin': '4500 mAh, sạc nhanh 30W'
    }
  },
  {
    id: 'prod-2',
    name: 'Laptop UltraSlim Carbon Pro 14"',
    category: 'laptop',
    categoryName: 'Laptop',
    price: 24500000,
    originalPrice: 27900000,
    discountPercent: 12,
    rating: 4.8,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    brand: 'Dell',
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    description: 'Thiết kế nguyên khối siêu mỏng nhẹ chỉ 1.1kg, trang bị CPU Core i7 thế hệ mới, bàn phím gõ êm ái cùng thời lượng pin lên đến 16 tiếng liên tục.',
    specs: {
      'Màn hình': '14.0" 2.8K OLED 90Hz 100% sRGB',
      'CPU': 'Intel Core i7-1360P Turbo 5.0GHz',
      'RAM': '16GB LPDDR5',
      'Ổ cứng': '512GB NVMe PCIe Gen 4',
      'Trọng lượng': '1.18 kg',
      'Pin': '65Wh, hỗ trợ sạc nhanh Type-C'
    }
  },
  {
    id: 'prod-3',
    name: 'Tai nghe Chống ồn Không dây Hi-Res PureSound',
    category: 'headphone',
    categoryName: 'Tai nghe',
    price: 6490000,
    originalPrice: 8490000,
    discountPercent: 24,
    rating: 4.9,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    brand: 'Sony',
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    description: 'Công nghệ khử tiếng ồn chủ động (ANC) hàng đầu thế giới, driver Dynamic 40mm cho âm bass sâu lắng và chi tiết nhạc cụ rõ nét. Thời lượng pin 35 giờ.',
    specs: {
      'Kết nối': 'Bluetooth 5.3 & AUX 3.5mm, LDAC',
      'Thời lượng pin': '35 giờ (bật ANC)',
      'Thời gian sạc': '3 giờ (sạc 10 phút dùng 5 giờ)',
      'Chống ồn': 'Khử ồn chủ động thích ứng kép ANC',
      'Micro thoại': '4 micro beamforming lọc gió'
    }
  },
  {
    id: 'prod-4',
    name: 'Đồng hồ thông minh Sport Tracker Pro Gen 2',
    category: 'smartwatch',
    categoryName: 'Đồng hồ thông minh',
    price: 8900000,
    originalPrice: 10500000,
    discountPercent: 15,
    rating: 4.7,
    reviewCount: 84,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    brand: 'Samsung',
    isFeatured: true,
    inStock: true,
    description: 'Vỏ nhôm hàng không siêu nhẹ, kính Sapphire chống trầy xước, tích hợp cảm biến đo nhịp tim BioActive, điện tâm đồ ECG và hơn 100 chế độ thể thao ngoài trời.',
    specs: {
      'Màn hình': '1.4" Super AMOLED Sapphire Always-On',
      'Chống nước': '5ATM + IP68 lặn độ sâu 50m',
      'Cảm biến': 'Nhịp tim, SpO2, ECG, BIA phân tích cơ mỡ',
      'Pin': 'Lên đến 48 giờ',
      'Kết nối': 'GPS băng tần kép, Bluetooth, NFC'
    }
  },

  // NEW PRODUCTS (Sản phẩm mới)
  {
    id: 'prod-5',
    name: 'Bàn phím cơ Không dây RGB Hot-swap Silent Touch',
    category: 'accessory',
    categoryName: 'Phụ kiện',
    price: 2150000,
    originalPrice: 2600000,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 65,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    brand: 'Asus',
    isNew: true,
    inStock: true,
    description: 'Bàn phím cơ layout 75% gọn gàng, switch bôi trơn sẵn cho cảm giác gõ êm nhẹ, đèn nền LED RGB 16.8 triệu màu và kết nối 3 chế độ (Bluetooth/Wireless 2.4G/Type-C).',
    specs: {
      'Layout': '75% (84 phím bấm)',
      'Switch': 'Linear Silent Pre-lubed, Hot-swap 5-pin',
      'Pin': '4000 mAh dùng tới 200 giờ',
      'Keycap': 'PBT Double-shot chống bóng',
      'Kết nối': 'Bluetooth 5.1 / Wireless 2.4GHz / Type-C'
    }
  },
  {
    id: 'prod-6',
    name: 'Tablet Creator Pro 11" 120Hz Liquid Retina',
    category: 'tablet',
    categoryName: 'Tablet',
    price: 18500000,
    originalPrice: 20900000,
    discountPercent: 11,
    rating: 4.8,
    reviewCount: 47,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
    brand: 'Apple',
    isNew: true,
    inStock: true,
    description: 'Chiếc máy tính bảng đa năng cho hoạ sĩ và kỹ sư. Màn hình Promotion 120Hz mượt mà, hỗ trợ bút cảm ứng độ trễ 9ms, cấu hình cực mạnh chạy đa nhiệm mượt mà.',
    specs: {
      'Màn hình': '11" Liquid Retina IPS 120Hz True Tone',
      'CPU': 'Chip 8 nhân đồ hoạ mạnh mẽ',
      'RAM': '8GB',
      'Bộ nhớ': '128GB',
      'Hỗ trợ': 'Bút cảm ứng Stylus Gen 2, Bàn phím rời',
      'Loa': '4 loa âm thanh vòm Dolby Atmos'
    }
  },
  {
    id: 'prod-7',
    name: 'Chuột Công thái học Không dây Precision Master 3S',
    category: 'accessory',
    categoryName: 'Phụ kiện',
    price: 1890000,
    originalPrice: 2350000,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    brand: 'Dell',
    isNew: true,
    isBestSeller: true,
    inStock: true,
    description: 'Thiết kế công thái học ôm sát lòng bàn tay giảm mỏi cổ tay khi làm việc lâu. Con lăn MagSpeed điện từ cuộn 1000 dòng/giây cùng cảm biến Darkfield 8000 DPI trên mọi mặt phẳng.',
    specs: {
      'DPI': '200 - 8000 DPI (tuỳ chỉnh)',
      'Số nút': '7 nút tuỳ biến chức năng',
      'Kết nối': 'Bluetooth Low Energy & Receiver 2.4G',
      'Pin': 'Dùng 70 ngày cho 1 lần sạc đầy',
      'Tính năng': 'Chuyển đổi mượt 3 thiết bị cùng lúc'
    }
  },

  // ADDITIONAL POPULAR & PROMOTIONAL PRODUCTS
  {
    id: 'prod-8',
    name: 'Màn hình Đồ hoạ UltraClear 27" 4K HDR400',
    category: 'accessory',
    categoryName: 'Phụ kiện',
    price: 9800000,
    originalPrice: 12500000,
    discountPercent: 22,
    rating: 4.7,
    reviewCount: 54,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    brand: 'Dell',
    isFeatured: true,
    inStock: true,
    description: 'Độ phân giải 4K UHD sắc nét, chuẩn màu 99% sRGB và 95% DCI-P3 chuyên nghiệp cho nhà thiết kế đồ hoạ. Cổng kết nối Type-C cấp nguồn sạc ngược 65W cho laptop.',
    specs: {
      'Kích thước': '27 inch tỷ lệ 16:9',
      'Tấm nền': 'IPS góc nhìn rộng 178 độ',
      'Độ phân giải': '4K UHD (3840 x 2160) 60Hz',
      'Cổng cắm': 'Type-C 65W, HDMI 2.0, DisplayPort 1.4, USB Hub',
      'Chuẩn màu': 'Delta E < 2, 99% sRGB, HDR400'
    }
  },
  {
    id: 'prod-9',
    name: 'Củ Sạc Nhanh GaN 65W 3 Cổng Tiện Lợi',
    category: 'accessory',
    categoryName: 'Phụ kiện',
    price: 650000,
    originalPrice: 950000,
    discountPercent: 32,
    rating: 4.8,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
    brand: 'Anker',
    isBestSeller: true,
    inStock: true,
    description: 'Công nghệ bán dẫn GaN thế hệ mới giúp kích thước nhỏ hơn 50% nhưng hiệu suất tản nhiệt và dòng sạc luôn ổn định. Sạc đồng thời laptop, điện thoại và máy tính bảng.',
    specs: {
      'Công suất': 'Tối đa 65W Power Delivery 3.0 / PPS / QC 4.0',
      'Cổng ra': '2 x USB-C (Max 65W) + 1 x USB-A (Max 22.5W)',
      'Bảo vệ': 'Chống quá nhiệt, quá tải, ngắn mạch thông minh',
      'Kích thước': 'Siêu nhỏ gọn bỏ túi mang đi du lịch'
    }
  },
  {
    id: 'prod-10',
    name: 'Smartphone Galaxy Pro 5G Camera AI',
    category: 'phone',
    categoryName: 'Điện thoại',
    price: 19990000,
    originalPrice: 23900000,
    discountPercent: 16,
    rating: 4.6,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    brand: 'Samsung',
    isNew: true,
    inStock: true,
    description: 'Cụm 4 camera AI hỗ trợ thu phóng quang học 30x, màn hình Dynamic AMOLED 2X 120Hz rực rỡ và thời lượng pin bền bỉ hỗ trợ cả ngày dài làm việc.',
    specs: {
      'Màn hình': '6.6" Dynamic AMOLED 2X 120Hz',
      'Chipset': 'Snapdragon 8 Gen 2 for Galaxy',
      'RAM': '8GB',
      'Bộ nhớ': '256GB',
      'Pin': '4700 mAh, sạc 45W'
    }
  },
  {
    id: 'prod-11',
    name: 'Tai nghe Bluetooth TWS Mini BassBoost',
    category: 'headphone',
    categoryName: 'Tai nghe',
    price: 1250000,
    originalPrice: 1800000,
    discountPercent: 30,
    rating: 4.5,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    brand: 'Sony',
    inStock: true,
    description: 'Tai nghe True Wireless gọn nhẹ bám tai thể thao, âm trầm sống động với công nghệ BassBoost độc quyền, kháng nước IPX5 an toàn khi tập gym.',
    specs: {
      'Chuẩn Bluetooth': '5.3 độ trễ cực thấp',
      'Pin': '7 giờ liên tục (hộp sạc kèm theo 28 giờ)',
      'Kháng nước': 'IPX5 chống mồ hôi và mưa nhẹ',
      'Điều khiển': 'Chạm cảm ứng thông minh'
    }
  },
  {
    id: 'prod-12',
    name: 'Laptop Gaming ROG Strix 15.6" 165Hz',
    category: 'laptop',
    categoryName: 'Laptop',
    price: 31900000,
    originalPrice: 35900000,
    discountPercent: 11,
    rating: 4.9,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    brand: 'Asus',
    isFeatured: true,
    inStock: false,
    description: 'Cỗ máy chiến game đỉnh cao với GPU RTX 4060 8GB, tản nhiệt buồng hơi kim loại lỏng Liquid Metal và màn hình tần số quét 165Hz siêu phản xạ.',
    specs: {
      'Màn hình': '15.6" QHD 165Hz 100% DCI-P3 3ms',
      'CPU': 'AMD Ryzen 7 7840HS 8 nhân 16 luồng',
      'VGA': 'NVIDIA GeForce RTX 4060 8GB GDDR6',
      'RAM': '16GB DDR5 5600MHz',
      'Ổ cứng': '1TB NVMe PCIe 4.0'
    }
  }
];

export const BRANDS = ['Apple', 'Samsung', 'Sony', 'Dell', 'Asus', 'Anker'];

export const NAV_ITEMS = [
  { id: 'all', label: 'Trang chủ', slug: 'all' },
  { id: 'phone', label: 'Điện thoại', slug: 'phone' },
  { id: 'laptop', label: 'Laptop', slug: 'laptop' },
  { id: 'tablet', label: 'Tablet', slug: 'tablet' },
  { id: 'headphone', label: 'Tai nghe', slug: 'headphone' },
  { id: 'smartwatch', label: 'Đồng hồ thông minh', slug: 'smartwatch' },
  { id: 'accessory', label: 'Phụ kiện', slug: 'accessory' },
  { id: 'promo', label: 'Khuyến mãi', slug: 'promo' },
];

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
