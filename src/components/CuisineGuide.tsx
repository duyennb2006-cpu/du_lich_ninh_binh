import React from 'react';
import { Utensils, MapPin, Phone, Sun, Sparkles, Flower2, Leaf, Lightbulb, ChefHat, Check } from 'lucide-react';
import { CUISINE_DATA, SEASONS_DATA } from '../data/travelData';

export const CuisineGuide: React.FC = () => {
  return (
    <section id="am-thuc" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Tinh Hoa Mỹ Vị Cố Đô</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cẩm Nang Bản Địa &amp; <span className="font-display italic text-emerald-600">Ẩm Thực Đặc Sản</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ninh Bình không chỉ say đắm lòng người bởi non nước mà còn lưu luyến du khách bằng những phong vị ẩm thực độc bản
            chỉ tìm thấy tại miền đá vôi ngàn năm.
          </p>
        </div>

        {/* 3 Main Specialties Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {CUISINE_DATA.map((dish) => (
            <div
              key={dish.id}
              className="group bg-slate-50/80 rounded-2xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Food Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-md">
                    {dish.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {dish.name}
                  </h3>

                  {/* Intro Description */}
                  <div className="text-sm text-slate-600 leading-relaxed">
                    <p className="font-medium text-slate-800 mb-1 flex items-center gap-1.5">
                      <ChefHat className="w-4 h-4 text-emerald-600" />
                      <span>Đặc điểm &amp; Hương vị:</span>
                    </p>
                    <p>{dish.intro}</p>
                    <p className="mt-2 text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60 text-xs leading-relaxed italic">
                      "{dish.flavor}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Suggested Restaurant Section */}
              <div className="p-6 pt-0">
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Gợi ý địa điểm thưởng thức:
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {dish.priceRange}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{dish.placeName}</span>
                  </h4>

                  <p className="text-xs text-slate-600 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{dish.placeAddress}</span>
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={`tel:${dish.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                      aria-label={`Gọi đặt bàn tại ${dish.placeName}`}
                    >
                      <Phone className="w-3 h-3 text-red-500" />
                      <span>Liên hệ: {dish.phone}</span>
                    </a>
                    <span className="text-[11px] text-slate-500">Chính gốc Ninh Bình</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Guide: Best Seasons to Visit Ninh Binh */}
        <div className="mt-12 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sun className="w-3.5 h-3.5" />
                  <span>Mẹo Nhỏ Bản Địa</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Thời Điểm Du Lịch Ninh Bình Đẹp Nhất Trong Năm
                </h3>
              </div>
              <p className="max-w-md text-sm text-slate-300 leading-relaxed">
                Mỗi mùa trong năm, mảnh đất Cố đô lại khoác lên mình một tấm áo kỳ ảo riêng biệt. Hãy chọn cho mình thời điểm lý tưởng nhất!
              </p>
            </div>

            {/* Seasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SEASONS_DATA.map((season, idx) => {
                const getIcon = (name: string) => {
                  switch (name) {
                    case 'sun': return Sun;
                    case 'sparkles': return Sparkles;
                    case 'flower': return Flower2;
                    default: return Leaf;
                  }
                };
                const IconComponent = getIcon(season.iconName);

                return (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/15 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                        {season.period}
                      </span>
                      <h4 className="text-base font-bold text-white mb-2">
                        {season.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {season.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-xs text-amber-200/90 flex items-start gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                      <span>{season.tips}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
