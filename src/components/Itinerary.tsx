import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, CheckCircle, Calculator, Users, Hotel, Bike, ShieldAlert } from 'lucide-react';
import { ITINERARY_PLANS, calculateTripCost, formatVND } from '../data/travelData';

export const Itinerary: React.FC = () => {
  const [activePlanId, setActivePlanId] = useState<'plan-1-day' | 'plan-2-days'>('plan-1-day');
  
  // Trip Calculator State
  const [calcPlan, setCalcPlan] = useState<'1-day' | '2-days'>('1-day');
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [vehicleType, setVehicleType] = useState<'xe_so' | 'xe_ga' | 'limousine'>('xe_ga');
  const [hotelStyle, setHotelStyle] = useState<'budget' | 'homestay_view' | 'none'>('homestay_view');

  const selectedPlan = ITINERARY_PLANS.find((p) => p.id === activePlanId) || ITINERARY_PLANS[0];

  const costEstimate = calculateTripCost({
    planType: calcPlan,
    peopleCount,
    vehicleType,
    hotelStyle: calcPlan === '1-day' ? 'none' : hotelStyle
  });

  return (
    <section id="lich-trinh" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kế Hoạch Khám Phá</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lịch Trình Gợi Ý <span className="font-display italic text-emerald-600">Chuẩn Bản Địa</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Được đúc kết từ kinh nghiệm thực tế của hướng dẫn viên địa phương, giúp bạn tối ưu thời gian di chuyển,
            không bỏ lỡ bất kỳ khoảnh khắc danh thắng tuyệt mỹ nào.
          </p>
        </div>

        {/* Tab Buttons for 1 Day vs 2 Days 1 Night */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {ITINERARY_PLANS.map((plan) => {
              const isActive = activePlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => {
                    setActivePlanId(plan.id as 'plan-1-day' | 'plan-2-days');
                    setCalcPlan(plan.id === 'plan-1-day' ? '1-day' : '2-days');
                  }}
                  className={`px-5 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                  aria-pressed={isActive}
                >
                  <Sparkles className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{plan.durationTag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Itinerary Details */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 mb-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-2">
                {selectedPlan.durationTag} • {selectedPlan.targetUser}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedPlan.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                {selectedPlan.subtitle}
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs shrink-0 text-left lg:text-right">
              <span className="text-xs text-slate-500 font-semibold block">Dự trù kinh phí:</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600">
                {selectedPlan.estimatedBudget}
              </span>
            </div>
          </div>

          {/* Timeline Days */}
          <div className="space-y-12">
            {selectedPlan.days.map((day, dIdx) => (
              <div key={dIdx}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-700 text-white font-bold text-sm mb-6 shadow-xs">
                  <MapPin className="w-4 h-4 text-emerald-200" />
                  <span>{day.dayTitle}</span>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-300 space-y-8 ml-3 sm:ml-4">
                  {day.steps.map((step, sIdx) => (
                    <div key={sIdx} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 shadow-sm group-hover:scale-125 group-hover:bg-emerald-500 transition-transform" />

                      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-700 mb-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{step.time}</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips for this itinerary */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/90 border border-amber-200">
            <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Lưu ý quan trọng cho lịch trình này:</span>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {selectedPlan.includedTips.map((tip, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2 text-xs text-amber-800">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive Trip Budget Estimator Tool */}
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-800/40">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Tiện Ích Trực Quan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Bảng Tính Chi Phí Du Lịch Ninh Bình Dự Kiến
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Tùy chỉnh số lượng người, thời gian chuyến đi và phương tiện để nhận bảng dự trù kinh phí chi tiết từng khoản.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Inputs */}
            <div className="lg:col-span-7 space-y-5">
              {/* Plan Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Thời gian hành trình
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalcPlan('1-day')}
                    className={`p-3 rounded-xl text-sm font-bold text-left border transition-all ${
                      calcPlan === '1-day'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    1 Ngày (Tràng An - Phố Cổ)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcPlan('2-days')}
                    className={`p-3 rounded-xl text-sm font-bold text-left border transition-all ${
                      calcPlan === '2-days'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    2 Ngày 1 Đêm (Trọn Gói)
                  </button>
                </div>
              </div>

              {/* People Count */}
              <div>
                <label htmlFor="people-count" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>2. Số lượng người trong đoàn ({peopleCount} người)</span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="people-count"
                    type="range"
                    min="1"
                    max="10"
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <span className="w-12 text-center font-bold text-lg text-emerald-300 bg-white/10 px-2 py-1 rounded-lg">
                    {peopleCount}
                  </span>
                </div>
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Bike className="w-4 h-4 text-emerald-400" />
                  <span>3. Phương tiện di chuyển ưa thích</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setVehicleType('xe_so')}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all ${
                      vehicleType === 'xe_so'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    Xe máy số <br /><span className="text-[10px] font-normal opacity-80">(100k/ngày)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVehicleType('xe_ga')}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all ${
                      vehicleType === 'xe_ga'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    Xe tay ga <br /><span className="text-[10px] font-normal opacity-80">(150k/ngày)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVehicleType('limousine')}
                    className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all ${
                      vehicleType === 'limousine'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    Limousine VIP <br /><span className="text-[10px] font-normal opacity-80">(160k/lượt)</span>
                  </button>
                </div>
              </div>

              {/* Accommodation (if 2 days) */}
              {calcPlan === '2-days' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                    <Hotel className="w-4 h-4 text-emerald-400" />
                    <span>4. Nơi lưu trú (Đêm 2N1Đ)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setHotelStyle('homestay_view')}
                      className={`p-3 rounded-xl text-xs font-bold text-left border transition-all ${
                        hotelStyle === 'homestay_view'
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Homestay view núi hồ Tam Cốc <br />
                      <span className="text-[11px] font-normal opacity-80">~650.000đ / phòng / đêm</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHotelStyle('budget')}
                      className={`p-3 rounded-xl text-xs font-bold text-left border transition-all ${
                        hotelStyle === 'budget'
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Khách sạn tiêu chuẩn TP Ninh Bình <br />
                      <span className="text-[11px] font-normal opacity-80">~400.000đ / phòng / đêm</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cost Breakdown Result Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-xl">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block mb-1">
                Dự trù kinh phí trọn gói
              </span>
              <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-white/15">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {formatVND(costEstimate.grandTotal)}
                </span>
                <span className="text-xs text-slate-300">/ {peopleCount} khách</span>
              </div>

              <div className="text-xs text-emerald-300 font-semibold mb-6">
                Tương đương: <strong className="text-base text-yellow-300 font-bold">{formatVND(costEstimate.perPerson)}</strong> / người
              </div>

              {/* Itemized details */}
              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Vé tham quan &amp; Thuyền Tràng An:</span>
                  <span className="font-bold text-white">{formatVND(costEstimate.breakdown.tickets)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Phương tiện di chuyển:</span>
                  <span className="font-bold text-white">{formatVND(costEstimate.breakdown.transport)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Ăn uống đặc sản dê núi &amp; cơm cháy:</span>
                  <span className="font-bold text-white">{formatVND(costEstimate.breakdown.food)}</span>
                </div>
                {calcPlan === '2-days' && (
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-300">Lưu trú Homestay / Khách sạn:</span>
                    <span className="font-bold text-white">{formatVND(costEstimate.breakdown.accommodation)}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-center">
                <a
                  href="tel:0912345678"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-md animate-hotline-pulse hover:from-red-500 hover:to-amber-500 transition-all"
                  aria-label="Liên hệ hotline tư vấn lịch trình"
                >
                  <span>Cần tư vấn thêm? Gọi Hotline 0912 345 678</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
