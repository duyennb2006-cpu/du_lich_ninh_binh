import React from 'react';
import { X, MapPin, Clock, Tag, CheckCircle2, Lightbulb, Compass } from 'lucide-react';
import { Attraction } from '../data/travelData';

interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
}

export const AttractionModal: React.FC<AttractionModalProps> = ({ attraction, onClose }) => {
  if (!attraction) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-attraction-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image with close button */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Đóng cửa sổ chi tiết"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-sm mb-2">
              {attraction.tag}
            </span>
            <h2 id="modal-attraction-title" className="text-2xl sm:text-3xl font-extrabold drop-shadow-md">
              {attraction.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Quick Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Giờ mở cửa:</strong> {attraction.openHours}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Giá vé:</strong> {attraction.ticketPrice}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 sm:col-span-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Vị trí:</strong> {attraction.location}</span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Giới thiệu chi tiết</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {attraction.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Trải nghiệm không thể bỏ lỡ</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {attraction.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Pro Tips */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <h3 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Mẹo hữu ích từ hướng dẫn viên địa phương</span>
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              {attraction.tips}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">Ninh Binh Travel Guide</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Đã hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
