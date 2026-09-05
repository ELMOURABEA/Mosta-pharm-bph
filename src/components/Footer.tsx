import { Pill, Phone, MapPin, Mail, ShieldCheck, Heart, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { HOTLINE_NUMBER, BRANCH_WHATSAPP } from '../data';

interface FooterProps {
  lang: 'en' | 'ar';
  onOpenPrescription: () => void;
}

export function Footer({ lang, onOpenPrescription }: FooterProps) {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/25">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                  El-Bendary
                </h3>
                <span className="text-[11px] font-bold text-red-400 tracking-widest uppercase">
                  PHARMACIES • صيدليات البنداري
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {isAr
                ? 'سلسلة صيدليات مصرية رائدة منذ عام 1980. نلتزم بأعلى معايير الجودة الصيدلانية، وسلسلة التبريد، وتقديم رعاية صحية إنسانية مخلصة لأكثر من أربعة عقود.'
                : 'Egypt’s premier healthcare pharmacy chain since 1980. Dedicated to pharmaceutical excellence, unbroken cold-chain preservation, and compassionate community care.'}
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/2${BRANCH_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {isAr ? 'الخدمات الطبية' : 'Services'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  {isAr ? 'صرف الروشتات المزمنة' : 'Prescription Dispensing'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  {isAr ? 'الأجهزة والمستلزمات الطبية' : 'Medical Devices'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">
                  {isAr ? 'العناية بالبشرة والتجميل' : 'Dermacosmetics'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  {isAr ? 'رعاية الأم والطفل' : 'Mother & Baby Care'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  {isAr ? 'الفيتامينات والمكملات' : 'Vitamins & Minerals'}
                </a>
              </li>
            </ul>
          </div>

          {/* Branch Hubs */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {isAr ? 'أهم الفروع' : 'Branch Hubs'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#branches" className="hover:text-red-400 transition-colors">
                  {isAr ? 'المهندسين - 69 شارع شهاب' : 'Mohandessin (Shehab St)'}
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-red-400 transition-colors">
                  {isAr ? 'طنطا - شارع الجلاء (1، 2، 3)' : 'Tanta (El Galaa St)'}
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-red-400 transition-colors">
                  {isAr ? 'طنطا - شارع البورصة ومول الشهاوي' : 'Tanta (El Borsa St)'}
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-red-400 transition-colors">
                  {isAr ? 'طنطا - شارع سعيد وكفر عصام' : 'Tanta (Saeed & Kafr Essam)'}
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-red-400 transition-colors">
                  {isAr ? 'طريق إسكندرية الزراعي والمعرض' : 'Alex Agriculture Road'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & 24/7 Hotline */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              {isAr ? 'الخط الساخن والطلب' : '24/7 Hotline'}
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${HOTLINE_NUMBER}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/20 border border-red-500/30 text-red-300 font-extrabold text-base hover:bg-red-600 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{HOTLINE_NUMBER}</span>
              </a>

              <p className="text-xs text-slate-400">
                {isAr
                  ? 'خدمة التوصيل المنزلي ممتدة ٢٤ ساعة بجميع الفروع في القاهرة وطنطا والجيزة.'
                  : 'Home delivery active 24/7 across all branches in Cairo, Giza, and Tanta.'}
              </p>

              <button
                onClick={onOpenPrescription}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white text-red-300 text-xs font-bold transition-colors text-center block"
              >
                {isAr ? 'ارفع روشتتك الآن' : 'Upload Prescription'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accreditation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>
              {isAr
                ? 'مرخصة رسمياً من وزارة الصحة وهيئة الدواء المصرية • خاضعة للرقابة الصيدلانية المستمرة'
                : 'Licensed by Egyptian Ministry of Health & Egyptian Drug Authority (EDA)'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-end gap-2 text-center md:text-right">
            <p>
              © 1980 - 2026 El-Bendary Pharmacies (صيدليات البنداري). All Rights Reserved.
            </p>
            <p className="text-red-400 font-medium">
              developed By @Most-Pharm.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
