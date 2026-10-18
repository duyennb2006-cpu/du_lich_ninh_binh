import React from 'react';
import { ChevronDown, Sparkles, Award, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="trang-chu"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* High Quality Unsplash Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=85"
          alt="Tuyệt đỉnh danh thắng Tràng An Ninh Bình - Non nước hữu tình"
          className="w-full h-full object-cover object-center filter brightness-90 transform scale-105 animate-in fade-in duration-1000"
          loading="eager"
        />
        {/* Multilayered Emerald & Dark Vignette Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-transparent to-slate-950/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Heritage Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg animate-bounce duration-1000">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Di Sản Văn Hóa & Thiên Nhiên Kép Thế Giới UNESCO</span>
        </div>

        {/* Impressive Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none text-white drop-shadow-md">
          Khám Phá Ninh Bình <br />
          <span className="font-display italic font-bold bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
            Tuyệt Đỉnh Danh Thắng Tràng An
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal drop-shadow-sm">
          Đắm mình trong cõi tiên cảnh non xanh nước biếc, lướt thuyền nan xuyên thủy động kỳ ảo,
          thả hồn theo hàng ngàn ánh đèn lồng Phố cổ Hoa Lư và thưởng ngoạn nét rêu phong u tịch Chùa Bích Động.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#dia-diem"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base shadow-xl shadow-emerald-900/40 hover:from-emerald-500 hover:to-teal-500 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Khám phá ngay danh sách địa điểm tham quan"
          >
            <span>Khám phá ngay</span>
            <ChevronDown className="w-5 h-5 animate-pulse" />
          </a>

          <a
            href="#lich-trinh"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/15 backdrop-blur-md text-white font-semibold text-base border border-white/20 hover:bg-white/25 hover:border-white/40 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Lịch trình gợi ý 1N & 2N1Đ</span>
          </a>
        </div>

        {/* Quick Highlights Info Badges */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Quần thể Tràng An</h3>
              <p className="text-xs text-slate-300">Thuyền nan xuyên 48 hang động</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Phố cổ Hoa Lư</h3>
              <p className="text-xs text-slate-300">Nghìn đèn lồng lung linh hồ Kỳ Lân</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Chùa Bích Động</h3>
              <p className="text-xs text-slate-300">Nam thiên đệ nhị động cổ kính</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
};
