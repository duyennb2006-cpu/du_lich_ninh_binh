/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Attractions } from './components/Attractions';
import { CuisineGuide } from './components/CuisineGuide';
import { Transportation } from './components/Transportation';
import { Itinerary } from './components/Itinerary';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('trang-chu');

  useEffect(() => {
    const sectionIds = ['trang-chu', 'dia-diem', 'am-thuc', 'di-chuyen', 'lich-trinh'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* 1. Header / Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Banner Trang Chủ (Hero Section) */}
        <Hero />

        {/* 2. Danh mục 1: Địa Điểm Tham Quan (Tràng An, Phố cổ Hoa Lư, Chùa Bích Động) */}
        <Attractions />

        {/* 3. Danh mục 2: Cẩm Nang Bản Địa & Ẩm Thực (Dê Núi, Cơm Cháy, Ốc Núi) */}
        <CuisineGuide />

        {/* 4. Danh mục 3: Phương Tiện & Di Chuyển (Limousine, Tàu hỏa, Thuê xe máy Đức Thắng, Tràng An Eco) */}
        <Transportation />

        {/* 5. Danh mục 4: Lịch Trình Gợi Ý (1 Ngày & 2 Ngày 1 Đêm) */}
        <Itinerary />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
