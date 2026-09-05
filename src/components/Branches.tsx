import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Clock, ExternalLink, Shield, 
  MessageSquare, MessageCircle, AlertCircle, Building2, Sparkles, QrCode, Headphones
} from 'lucide-react';
import { BRANCHES_DATA, HOTLINE_NUMBER, BRANCH_WHATSAPP, COMPLAINTS_PHONE } from '../data';
import { Branch } from '../types';

interface BranchesProps {
  lang: 'en' | 'ar';
}

export function Branches({ lang }: BranchesProps) {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const isAr = lang === 'ar';

  const cities = [
    { id: 'all', label: isAr ? 'جميع الفروع (١٥+ فرع)' : 'All Branches (15+)' },
    { id: 'Cairo', label: isAr ? 'القاهرة والجيزة (المهندسين)' : 'Cairo & Giza' },
    { id: 'Tanta', label: isAr ? 'طنطا والدلتا' : 'Tanta (Delta)' },
    { id: 'soon', label: isAr ? 'فروع قريباً (٢٠٢٧)' : 'Opening Soon' },
  ];

  const filteredBranches = BRANCHES_DATA.filter((b) => {
    if (selectedCity === 'all') return true;
    if (selectedCity === 'soon') return b.status === 'soon';
    if (selectedCity === 'Cairo') return b.city === 'Cairo' || b.city === 'Giza';
    if (selectedCity === 'Tanta') return b.city === 'Tanta';
    return b.city === selectedCity && b.status !== 'soon';
  });

  return (
    <section id="branches" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Red Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header matching user screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-red-500" />
            {isAr ? 'شبكة صيدليات البنداري' : 'El-Bendary Pharmacy Network'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            {isAr ? 'فروعنا' : 'Our Branches'}
          </h2>
          <p className="mt-3 text-red-400 text-lg sm:text-xl font-bold">
            {isAr
              ? 'ونقدم خدماتنا في أكثر من 15 فرع'
              : 'Providing our professional healthcare in more than 15 branches'}
          </p>
          <p className="mt-2 text-slate-400 text-sm">
            {isAr
              ? 'خدمة التوصيل السريع للمنازل على مدار ٢٤ ساعة في كافة الفروع'
              : '24/7 express home delivery and clinical care across all locations'}
          </p>
        </div>

        {/* Top Contact Banners matching the user screenshot */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {/* WhatsApp Banner */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group hover:border-red-500/50 transition-all">
            <div className="flex items-center gap-4 text-right">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {isAr ? 'واتس آب الفروع' : 'Branches WhatsApp'}
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
                <p className="text-emerald-400 font-extrabold text-xl tracking-wider mt-1 dir-ltr text-left sm:text-right">
                  {BRANCH_WHATSAPP}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {isAr ? 'أرسل الروشتة أو استفسارك وسيتم الرد فوراً' : 'Send prescription or query for instant reply'}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/2${BRANCH_WHATSAPP}?text=${encodeURIComponent(
                  isAr ? 'مرحباً صيدليات البنداري، أود الاستفسار عن خدمة وتوصيل علاج.' : 'Hello El-Bendary Pharmacies, I would like to inquire about medication delivery.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center shadow-lg shadow-emerald-600/30 transition-all"
              >
                {isAr ? 'مراسلة' : 'Chat'}
              </a>
            </div>
          </div>

          {/* Complaints & Suggestions Banner */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group hover:border-red-500/50 transition-all">
            <div className="flex items-center gap-4 text-right">
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                <Headphones className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {isAr ? 'شكاوى واقتراحات' : 'Complaints & Suggestions'}
                </h3>
                <p className="text-red-400 font-extrabold text-xl tracking-wider mt-1 dir-ltr text-left sm:text-right">
                  {COMPLAINTS_PHONE}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {isAr ? 'صوتك مسموع، رضاكم هو غايتنا الأولى' : 'Direct line to general management'}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto">
              <a
                href={`tel:${COMPLAINTS_PHONE}`}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm text-center shadow-lg shadow-red-600/30 transition-all"
              >
                {isAr ? 'اتصال' : 'Call'}
              </a>
            </div>
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCity === city.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-400/50'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              {city.label}
            </button>
          ))}
        </div>

        {/* Branches Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-800/80 border border-slate-700/80 hover:border-red-500/70 rounded-3xl p-6 shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Header with red map pin icon & status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black text-red-500 tracking-tight">
                        {isAr ? branch.nameAr : branch.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {isAr ? branch.cityAr : branch.city}
                      </span>
                    </div>
                  </div>

                  {branch.status === 'soon' ? (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/50">
                      {isAr ? 'افتتاح قريباً' : 'Opening Soon'}
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      24/7
                    </span>
                  )}
                </div>

                {/* Exact Street Address from user screenshots */}
                <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed bg-slate-900/60 p-3 rounded-2xl border border-slate-700/50">
                  {isAr ? branch.addressAr : branch.address}
                </p>

                {/* Phone Numbers List Box matching user screenshot */}
                <div className="space-y-2 mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                    <Phone className="w-3.5 h-3.5 text-red-400" />
                    <span>{isAr ? 'أرقام الفرع المباشرة:' : 'Direct Branch Phone Lines:'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {branch.phones && branch.phones.length > 0 ? (
                      branch.phones.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:${phone}`}
                          className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900 hover:bg-red-600/20 text-slate-200 hover:text-white border border-slate-700/80 hover:border-red-500/50 text-xs font-bold transition-all group/phone"
                        >
                          <span className="text-red-400 group-hover/phone:text-red-300">
                            <Phone className="w-3.5 h-3.5" />
                          </span>
                          <span className="font-mono tracking-wider dir-ltr">{phone}</span>
                        </a>
                      ))
                    ) : (
                      <a
                        href={`tel:${branch.phone}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900 hover:bg-red-600/20 text-slate-200 hover:text-white border border-slate-700/80 hover:border-red-500/50 text-xs font-bold transition-all"
                      >
                        <span className="text-red-400">
                          <Phone className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-mono tracking-wider dir-ltr">{branch.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Google Maps & WhatsApp */}
              <div className="pt-4 border-t border-slate-700/70 flex items-center gap-2.5">
                {branch.googleMapUrl ? (
                  <a
                    href={branch.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/25"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{isAr ? 'خرائط Google' : 'Google Maps'}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                ) : (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `El-Bendary Pharmacy ${branch.name} ${branch.mapQuery}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/25"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{isAr ? 'خرائط Google' : 'Google Maps'}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}

                <a
                  href={`https://wa.me/2${branch.whatsapp || BRANCH_WHATSAPP}?text=${encodeURIComponent(
                    isAr 
                      ? `مرحباً صيدليات البنداري ${branch.nameAr}، أود الاستفسار عن توفر دواء وتوصيله.` 
                      : `Hello El-Bendary Pharmacy ${branch.name}, I would like to order medication.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition-all"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Hotline callout banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 text-red-500 flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-white">
                {isAr ? `الخط الساخن الموحد لكافة الفروع: ${HOTLINE_NUMBER}` : `Unified Hotline Across All Branches: ${HOTLINE_NUMBER}`}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                {isAr
                  ? 'اتصال واحد يوجهك تلقائياً لأقرب صيدلية ومندوب توصيل في منطقتك على مدار ٢٤ ساعة.'
                  : 'One single call routes you directly to the closest branch dispatcher and pharmacist 24/7.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${HOTLINE_NUMBER}`}
            className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-lg shadow-red-600/30 transition-all shrink-0"
          >
            {isAr ? `اتصل الآن ${HOTLINE_NUMBER}` : `Call ${HOTLINE_NUMBER} Now`}
          </a>
        </div>
      </div>
    </section>
  );
}
