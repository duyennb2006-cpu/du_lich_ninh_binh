import React from 'react';
import { Bike, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Car, Train, Navigation, Sparkles } from 'lucide-react';
import { RENTAL_SHOPS, TRANSPORT_OPTIONS } from '../data/travelData';

export const Transportation: React.FC = () => {
  return (
    <section id="di-chuyen" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chỉ Đường &amp; Phương Tiện</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Phương Tiện &amp; <span className="font-display italic text-emerald-600">Di Chuyển Thuận Tiện</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Khoảng cách từ Hà Nội đến Ninh Bình chỉ gần 95km, hệ thống giao thông cao tốc hiện đại giúp chuyến đi
            của bạn trở nên vô cùng nhanh chóng, an toàn và dễ dàng.
          </p>
        </div>

        {/* 1. Hướng Dẫn Di Chuyển Từ Hà Nội */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Hướng dẫn di chuyển từ Hà Nội đến Ninh Bình
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSPORT_OPTIONS.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {opt.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {opt.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    {opt.type === 'limousine' ? (
                      <Car className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Train className="w-5 h-5 text-emerald-600" />
                    )}
                    <span>{opt.title}</span>
                  </h4>

                  <p className="text-base font-extrabold text-emerald-600 mb-4">
                    Giá vé: {opt.price}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {opt.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <p className="text-xs text-slate-600 italic">
                    <strong>Gợi ý:</strong> {opt.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Dịch Vụ Thuê Xe Máy & Di Chuyển Tại Ninh Bình */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Dịch vụ thuê xe máy &amp; di chuyển tại Ninh Bình
              </h3>
              <p className="text-sm text-slate-500">
                Thuê xe máy vi vu trên những cung đường lúa vàng, luồn qua các hẻm núi đá là trải nghiệm tuyệt vời nhất.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RENTAL_SHOPS.map((shop) => (
              <div
                key={shop.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100/80 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <Bike className="w-4 h-4 text-emerald-700" />
                      <span>Cửa Hàng Uy Tín Hàng Đầu</span>
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                    {shop.name}
                  </h4>

                  <p className="text-sm text-slate-600 flex items-start gap-2 mb-6">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Địa chỉ:</strong> {shop.address}</span>
                  </p>

                  {/* Bảng giá tham khảo */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Bảng giá thuê xe tham khảo:</span>
                    </h5>
                    <div className="space-y-2">
                      {shop.pricing.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center justify-between text-sm py-1.5 border-b border-slate-200/60 last:border-0"
                        >
                          <span className="font-medium text-slate-700">{p.item}</span>
                          <span className="font-extrabold text-emerald-700 bg-white px-2.5 py-0.5 rounded-lg border border-emerald-200 text-xs">
                            {p.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dịch vụ & Tiện ích đi kèm */}
                  <div className="mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Ưu đãi &amp; Dịch vụ hỗ trợ:</span>
                    </h5>
                    <ul className="grid grid-cols-1 gap-2">
                      {shop.services.map((srv, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Prominent Flashing Hotline Call Button */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-2.5">
                    {shop.note}
                  </p>
                  <a
                    href={`tel:${shop.rawPhone}`}
                    className={`w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl font-bold text-base text-white shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 ${
                      shop.id === 'duc-thang'
                        ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 animate-hotline-pulse hover:from-red-500 hover:to-amber-500 focus:ring-red-300'
                        : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 animate-emerald-pulse hover:from-emerald-500 hover:to-teal-500 focus:ring-emerald-300'
                    }`}
                    aria-label={`Gọi ngay đặt xe tại ${shop.name} hotline ${shop.hotline}`}
                  >
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <Phone className="w-5 h-5 shrink-0" />
                    <span>Gọi Ngay Đặt Xe: <strong className="tracking-wider text-yellow-100 text-lg">{shop.hotline}</strong></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
