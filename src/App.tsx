import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProductCatalog } from './components/ProductCatalog';
import { Branches } from './components/Branches';
import { Insurance } from './components/Insurance';
import { Testimonials } from './components/Testimonials';
import { ContactFAQ } from './components/ContactFAQ';
import { Footer } from './components/Footer';
import { PrescriptionModal } from './components/PrescriptionModal';
import { Phone, UploadCloud } from 'lucide-react';
import { BRANCH_WHATSAPP } from './data';

export default function App() {
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  // Toggle language and update HTML document direction
  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Navigation */}
      <Navbar
        onOpenPrescription={() => setIsPrescriptionOpen(true)}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
          lang={lang}
        />

        {/* 2. About Us & 40+ Years Heritage */}
        <About
          lang={lang}
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
        />

        {/* 3. Comprehensive Healthcare Services Divisions */}
        <Services
          lang={lang}
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
        />

        {/* 4. Curated Product & Medical Equipment Catalog */}
        <ProductCatalog
          lang={lang}
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
        />

        {/* 5. National Branches Network & Explorer */}
        <Branches
          lang={lang}
        />

        {/* 6. Medical Insurance Network (30+ Partners) */}
        <Insurance
          lang={lang}
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
        />

        {/* 7. Patient & Physician Testimonials */}
        <Testimonials
          lang={lang}
        />

        {/* 8. Frequently Asked Questions & 24/7 Hotline Contact */}
        <ContactFAQ
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPrescription={() => setIsPrescriptionOpen(true)}
      />

      {/* Interactive Prescription Upload & Quick Order Modal */}
      <PrescriptionModal
        isOpen={isPrescriptionOpen}
        onClose={() => setIsPrescriptionOpen(false)}
        lang={lang}
      />

      {/* Floating Action Button (FAB) for Mobile / Rapid Emergency Access */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Prescription Upload Quick Floater */}
        <button
          onClick={() => setIsPrescriptionOpen(true)}
          className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-950/20 flex items-center gap-2 transition-all hover:scale-105 border border-red-500/30"
          title="Upload Prescription"
        >
          <UploadCloud className="w-4 h-4 text-rose-200" />
          <span className="hidden sm:inline">
            {lang === 'ar' ? 'ارفع روشتتك' : 'Rx Upload'}
          </span>
        </button>

        {/* WhatsApp Fast Order Floater */}
        <a
          href={`https://wa.me/${BRANCH_WHATSAPP}?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%86%D8%AF%D8%A7%D8%B1%D9%8A%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%A3%D8%AF%D9%88%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%B9.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-110"
          title="Order on WhatsApp"
          aria-label="Order on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
