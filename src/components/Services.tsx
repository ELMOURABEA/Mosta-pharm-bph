import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Pill, Activity, Sparkles, Baby, HeartPulse, 
  Stethoscope, CheckCircle2, ChevronRight, X, Phone 
} from 'lucide-react';
import { SERVICES_DATA, HOTLINE_NUMBER } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  lang: 'en' | 'ar';
  onOpenPrescription: () => void;
}

export function Services({ lang, onOpenPrescription }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const isAr = lang === 'ar';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return Pill;
      case 'Activity':
        return Activity;
      case 'Sparkles':
        return Sparkles;
      case 'Baby':
        return Baby;
      case 'HeartPulse':
        return HeartPulse;
      default:
        return Stethoscope;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Pill className="w-3.5 h-3.5 text-red-600" />
            {isAr ? 'قطاعات الرعاية الشاملة' : 'Comprehensive Healthcare Divisions'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {isAr ? (
              <>
                خدمات طبية ورعاية <br />
                <span className="text-gradient">صيدلانية بأعلى المقاييس</span>
              </>
            ) : (
              <>
                World-Class Pharmacy <br />
                <span className="text-gradient">Services For Every Family</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'من صرف الأدوية المزمنة الحساسة إلى أرقى الماركات العلاجية والأجهزة الطبية المعتمدة، نلبي كافة احتياجاتك الصحية تحت سقف واحد.'
              : 'From critical cold-chain biologicals to clinical skincare, baby nutrition, and medical equipment, discover our dedicated pharmaceutical divisions.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-red-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-lg shadow-red-900/10 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-red-50 text-slate-700 group-hover:text-red-700 transition-colors">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {isAr ? service.titleAr : service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {isAr ? service.descriptionAr : service.description}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.details.slice(0, 2).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>{isAr ? 'عرض التفاصيل والطلب' : 'View Details & Order'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenPrescription}
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-800 hover:bg-red-100 transition-colors"
                  >
                    {isAr ? 'طلب الخدمة' : 'Request'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-slate-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedService.gradient} text-white flex items-center justify-center shadow-md`}>
                  {(() => {
                    const ModalIcon = getIcon(selectedService.iconName);
                    return <ModalIcon className="w-6 h-6" />;
                  })()}
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                {isAr ? selectedService.titleAr : selectedService.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {isAr ? selectedService.descriptionAr : selectedService.description}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  {isAr ? 'الميزات والضمانات المشمولة:' : 'Division Highlights & Guarantees:'}
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenPrescription();
                  }}
                  className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm text-center shadow-md transition-all"
                >
                  {isAr ? 'اطلب الخدمة أو الدواء' : 'Order or Dispense Now'}
                </button>
                <a
                  href={`tel:${HOTLINE_NUMBER}`}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>{HOTLINE_NUMBER}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
