import React, { useState, useEffect } from 'react';
import { Compass, Phone, ArrowUp, Heart, MapPin, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <a href="#trang-chu" className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Ninh Binh <span className="text-emerald-400 font-display italic">Travel</span>
                </span>
              </a>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Cổng thông tin &amp; cẩm nang du lịch Ninh Bình toàn diện. Khám phá vẻ đẹp non nước Tràng An,
                di tích lịch sử Cố đô Hoa Lư và tinh hoa ẩm thực đất rồng thiêng.
              </p>
              <div className="pt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cam kết đồng hành cùng du khách văn minh &amp; du lịch xanh</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Danh Mục Chính
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="#trang-chu" className="hover:text-emerald-400 transition-colors">
                    1. Trang Chủ Khám Phá
                  </a>
                </li>
                <li>
                  <a href="#dia-diem" className="hover:text-emerald-400 transition-colors">
                    2. Địa Điểm Tham Quan (Tràng An, Hoa Lư, Bích Động)
                  </a>
                </li>
                <li>
                  <a href="#am-thuc" className="hover:text-emerald-400 transition-colors">
                    3. Cẩm Nang &amp; Ẩm Thực (Dê Núi, Cơm Cháy, Ốc Núi)
                  </a>
                </li>
                <li>
                  <a href="#di-chuyen" className="hover:text-emerald-400 transition-colors">
                    4. Phương Tiện &amp; Thuê Xe Máy Ninh Bình
                  </a>
                </li>
                <li>
                  <a href="#lich-trinh" className="hover:text-emerald-400 transition-colors">
                    5. Lịch Trình Gợi Ý 1N &amp; 2N1Đ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Hotline Thuê Xe Máy & Hỗ Trợ */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Hotline Đặt Xe &amp; Dịch Vụ
              </h4>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs font-semibold text-slate-400 mb-1">Thuê xe máy Đức Thắng:</p>
                  <a
                    href="tel:0912345678"
                    className="text-amber-400 hover:text-amber-300 font-bold text-sm flex items-center gap-2"
                    aria-label="Gọi Đức Thắng 0912 345 678"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span>0912 345 678 (Gọi ngay)</span>
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Đường Tố Hữu, P. Đông Thành, TP. Ninh Bình</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs font-semibold text-slate-400 mb-1">Tràng An Eco Car &amp; Moto:</p>
                  <a
                    href="tel:0988765432"
                    className="text-emerald-400 hover:text-emerald-300 font-bold text-sm flex items-center gap-2"
                    aria-label="Gọi Tràng An Eco 0988 765 432"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>0988 765 432 (Giao xe tận nơi)</span>
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Khu du lịch Tràng An, Hoa Lư, Ninh Bình</p>
                </div>
              </div>
            </div>

            {/* Column 4: Contact & Travel Tips */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Thông Tin Hữu Ích
              </h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Trung tâm Hỗ trợ Du khách Cố đô: Phường Đông Thành, TP. Ninh Bình</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>hotro@ninhbinhtravel.vn</span>
                </p>
                <div className="mt-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-900/60 text-emerald-200">
                  <p className="font-semibold text-xs text-emerald-300 mb-1">Mẹo xanh bảo vệ di sản:</p>
                  <p className="text-[11px] text-emerald-300/80 leading-relaxed">
                    Hãy giữ gìn vệ sinh chung, không vứt rác xuống lòng sông Tràng An và giữ thái độ tôn kính tại các đền chùa cổ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Ninh Binh Travel Guide. Thiết kế hiện đại, chuẩn SEO &amp; tối ưu đa thiết bị.
            </p>
            <p className="flex items-center gap-1 text-slate-400">
              <span>Được xây dựng với tình yêu danh thắng Việt Nam</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Quick Call Button with Pulse */}
        <a
          href="tel:0912345678"
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs sm:text-sm shadow-2xl animate-hotline-pulse hover:scale-105 active:scale-95 transition-transform"
          title="Gọi ngay hotline thuê xe Đức Thắng: 0912 345 678"
          aria-label="Gọi ngay hotline 0912 345 678"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Hotline Đặt Xe: 0912 345 678</span>
          <span className="sm:hidden">0912 345 678</span>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-white text-slate-700 hover:text-emerald-600 shadow-xl border border-slate-200 hover:border-emerald-300 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};
