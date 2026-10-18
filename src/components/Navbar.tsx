import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Phone, MapPin, Calendar, Utensils, Bike } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#trang-chu', label: 'Trang Chủ', id: 'trang-chu', icon: Compass },
    { href: '#dia-diem', label: 'Địa Điểm Tham Quan', id: 'dia-diem', icon: MapPin },
    { href: '#am-thuc', label: 'Cẩm Nang & Ẩm Thực', id: 'am-thuc', icon: Utensils },
    { href: '#di-chuyen', label: 'Phương Tiện & Di Chuyển', id: 'di-chuyen', icon: Bike },
    { href: '#lich-trinh', label: 'Lịch Trình Gợi Ý', id: 'lich-trinh', icon: Calendar },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-emerald-100'
          : 'bg-gradient-to-b from-slate-950/70 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            aria-label="Ninh Binh Travel - Về trang chủ"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className={`text-xl font-extrabold tracking-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Ninh Binh <span className="text-emerald-500 font-display italic">Travel</span>
              </span>
              <p className={`text-[10px] uppercase tracking-wider font-semibold ${
                isScrolled ? 'text-emerald-700' : 'text-emerald-300'
              }`}>
                Di sản Cố Đô Tràng An
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Menu chính">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isScrolled
                      ? isActive
                        ? 'text-emerald-700 bg-emerald-50 font-semibold shadow-xs'
                        : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                      : isActive
                        ? 'text-emerald-300 bg-white/15 font-semibold'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Hotline Call Button (Flashing/Pulsing) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0912345678"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-md animate-hotline-pulse hover:from-red-500 hover:to-amber-500 transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
              title="Hotline thuê xe máy & hỗ trợ du khách Đức Thắng"
              aria-label="Gọi ngay hotline thuê xe máy Đức Thắng 0912 345 678"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline: <strong className="tracking-wide">0912 345 678</strong></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Mở danh mục điều hướng"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-800 border-b border-emerald-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-emerald-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <p className="text-xs text-slate-500 font-medium">Hỗ trợ thuê xe & tư vấn lịch trình:</p>
            <a
              href="tel:0912345678"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-sm shadow-md animate-hotline-pulse"
              aria-label="Gọi hotline 0912 345 678"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi ngay Đức Thắng: 0912 345 678</span>
            </a>
            <a
              href="tel:0988765432"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
              aria-label="Gọi hotline 0988 765 432"
            >
              <Phone className="w-4 h-4" />
              <span>Tràng An Eco: 0988 765 432</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
