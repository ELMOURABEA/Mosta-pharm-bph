import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

interface TestimonialsProps {
  lang: 'en' | 'ar';
}

export function Testimonials({ lang }: TestimonialsProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-teal-600" />
            {isAr ? 'ثقة أطبائنا وعملائنا' : 'Patient & Physician Trust'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {isAr ? (
              <>
                أجيال تثق بنا <br />
                <span className="text-gradient">في كل أرجاء مصر</span>
              </>
            ) : (
              <>
                Four Decades of <br />
                <span className="text-gradient">Earned Respect & Loyalty</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'تجارب حقيقية من أطباء استشاريين، سكان المنتجعات الصيفية، وعائلات مصرية نعتز بخدمتهم منذ عقود.'
              : 'Authentic testimonials from consulting cardiologists, North Coast residents, and families who rely on our pharmacies daily.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{isAr ? t.commentAr : t.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t.name}</h4>
                  <p className="text-[11px] text-teal-700 font-medium">{t.role}</p>
                  <p className="text-[10px] text-slate-400">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm grid sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <Star className="w-6 h-6 fill-current text-amber-500" />
            </div>
            <h4 className="font-display text-2xl font-bold text-slate-900">4.9 / 5.0</h4>
            <p className="text-xs text-slate-500 mt-1">
              {isAr ? 'تقييم رضى العملاء بناءً على +15,000 استبيان' : 'Customer Satisfaction across 15,000+ reviews'}
            </p>
          </div>

          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-slate-100 py-4 sm:py-0">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-display text-2xl font-bold text-slate-900">100% MOH</h4>
            <p className="text-xs text-slate-500 mt-1">
              {isAr ? 'مرخصة رسمياً من وزارة الصحة وهيئة الدواء المصرية' : 'Full Ministry of Health Accreditation'}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-display text-2xl font-bold text-slate-900">45+ Years</h4>
            <p className="text-xs text-slate-500 mt-1">
              {isAr ? 'خدمة متواصلة للأسر المصرية منذ عام 1980' : 'Continuous care for Egyptian families since 1980'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
