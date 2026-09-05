import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Pill, Menu, X, ChevronRight, UploadCloud, 
  Clock, ShieldCheck, MapPin, Globe, Sparkles 
} from 'lucide-react';
import { HOTLINE_NUMBER, BRANCH_WHATSAPP } from '../data';

interface NavbarProps {
  onOpenPrescription: () => void;
  lang: 'en' | 'ar';
  onToggleLang: () => void;
}

export function Navbar({ onOpenPrescription, lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '#hero' },
    { label: isAr ? 'عن البنداري' : 'About', href: '#about' },
    { label: isAr ? 'الخدمات' : 'Services', href: '#services' },
    { label: isAr ? 'المنتجات المميزة' : 'Catalog', href: '#products' },
    { label: isAr ? 'شبكة الفروع' : 'Branches', href: '#branches' },
    { label: isAr ? 'التأمين الطبي' : 'Insurance', href: '#insurance' },
    { label: isAr ? 'الأسئلة الشائعة' : 'FAQ', href: '#faq' },
    { label: isAr ? 'تواصل معنا' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Emergency / Hotline announcement bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${HOTLINE_NUMBER}`} 
              className="inline-flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <Phone className="w-3.5 h-3.5" />
              <span>{isAr ? `الخط الساخن: ${HOTLINE_NUMBER}` : `24/7 Hotline: ${HOTLINE_NUMBER}`}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'توصيل سريع خلال ٢٠-٣٥ دقيقة في القاهرة والجيزة وطنطا' : 'Express delivery in 20-35 mins across Cairo, Giza & Tanta'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`https://wa.me/2${BRANCH_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp: {BRANCH_WHATSAPP}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1 hover:text-white font-semibold transition-colors px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-red-400" />
              <span>{isAr ? 'English' : 'عربي'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'glass shadow-md py-3' : 'bg-white/95 py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                  El-Bendary
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800 tracking-wider">
                  EST. 1980
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest text-red-700 uppercase">
                  PHARMACIES
                </span>
                <span className="text-[11px] text-slate-400 font-arabic font-semibold">
                  صيدليات البنداري
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-600 transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPrescription}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-50 text-red-800 hover:bg-red-100 border border-red-200 text-xs font-bold transition-all hover:shadow-sm"
            >
              <UploadCloud className="w-4 h-4 text-red-600" />
              <span>{isAr ? 'ارفع الروشتة' : 'Upload Prescription'}</span>
            </button>

            <a
              href={`tel:${HOTLINE_NUMBER}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs font-bold shadow-md shadow-red-600/20 transition-all hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>{isAr ? `الخط الساخن ${HOTLINE_NUMBER}` : `Call ${HOTLINE_NUMBER}`}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenPrescription}
              className="sm:hidden p-2 rounded-xl bg-red-50 text-red-700 border border-red-200"
              aria-label="Upload Prescription"
            >
              <UploadCloud className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg overflow-hidden shadow-xl"
            >
              <div className="px-6 py-5 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-slate-700 font-semibold py-2.5 border-b border-slate-100 hover:text-red-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}

                <div className="pt-3 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenPrescription();
                    }}
                    className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>{isAr ? 'ارفع الروشتة الآن' : 'Upload Prescription Now'}</span>
                  </button>

                  <a
                    href={`tel:${HOTLINE_NUMBER}`}
                    className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-red-400" />
                    <span>{isAr ? `اتصل بالخط الساخن ${HOTLINE_NUMBER}` : `Call Hotline ${HOTLINE_NUMBER}`}</span>
                  </a>

                  <button
                    onClick={onToggleLang}
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <Globe className="w-4 h-4 text-red-600" />
                    <span>{isAr ? 'Switch to English' : 'التحويل للغة العربية'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
