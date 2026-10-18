import React, { useState } from 'react';
import { ArrowRight, MapPin, Compass, Sparkles } from 'lucide-react';
import { ATTRACTIONS_DATA, Attraction } from '../data/travelData';
import { AttractionModal } from './AttractionModal';

export const Attractions: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  return (
    <section id="dia-diem" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Danh Thắng Tiêu Biểu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Địa Điểm Tham Quan <span className="font-display italic text-emerald-600">Nổi Tiếng</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Khám phá 3 điểm đến biểu tượng tạo nên linh hồn của mảnh đất Cố đô Ninh Bình: non nước Tràng An kỳ vĩ,
            phố cổ Hoa Lư rực rỡ và chùa Bích Động cổ kính u tịch.
          </p>
        </div>

        {/* 3 Featured Attraction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ATTRACTIONS_DATA.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md backdrop-blur-md text-white ${
                    item.tagColor === 'emerald'
                      ? 'bg-emerald-600/90'
                      : item.tagColor === 'amber'
                      ? 'bg-amber-600/90'
                      : 'bg-teal-600/90'
                  }`}>
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    {item.tag}
                  </span>
                </div>

                {/* Quick Location overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-white/90 drop-shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>

                  {/* 2-3 Sentences Description as requested */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.shortSummary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <p className="text-xs text-slate-500">
                      <strong>Giá vé:</strong> {item.ticketPrice.split(';')[0]}
                    </p>
                    <p className="text-xs text-slate-500">
                      <strong>Giờ mở cửa:</strong> {item.openHours}
                    </p>
                  </div>
                </div>

                {/* "Xem chi tiết" Button */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedAttraction(item)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm hover:bg-emerald-600 hover:text-white transition-all duration-200 group-hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label={`Xem chi tiết địa điểm ${item.name}`}
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
    </section>
  );
};
