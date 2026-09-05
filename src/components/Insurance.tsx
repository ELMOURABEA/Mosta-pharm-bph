import { motion } from 'motion/react';
import { 
  ShieldCheck, CheckCircle2, CreditCard, ArrowRight, 
  FileText, Clock, Users, Building2 
} from 'lucide-react';
import { INSURANCE_PARTNERS } from '../data';

interface InsuranceProps {
  lang: 'en' | 'ar';
  onOpenPrescription: () => void;
}

export function Insurance({ lang, onOpenPrescription }: InsuranceProps) {
  const isAr = lang === 'ar';

  const steps = [
    {
      number: '01',
      title: isAr ? 'رفع الروشتة وكارت التأمين' : 'Submit Prescription & Card',
      desc: isAr ? 'ارفع صورة واضحة للروشتة الطبية وبطاقة التأمين الطبي عبر الموقع أو الواتساب.' : 'Upload a clear photo of your doctor’s prescription and health insurance card.'
    },
    {
      number: '02',
      title: isAr ? 'الموافقة الإلكترونية الفورية' : 'Instant Digital Approval',
      desc: isAr ? 'يقوم مكتب التأمين بالفرع بإدخال البيانات على نظام التأمين الخاص بشركتك خلال دقائق.' : 'Our insurance desk verifies coverage and co-pay directly via your insurer portal.'
    },
    {
      number: '03',
      title: isAr ? 'الاستلام أو التوصيل للمنزل' : 'Doorstep Cashless Delivery',
      desc: isAr ? 'تصلك الأدوية مجهزة مع دفع نسبة التحمل المقررة فقط دون أي عناء أو انتظار.' : 'Receive your medication at home, paying only your designated policy co-pay.'
    }
  ];

  return (
    <section id="insurance" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            {isAr ? 'شبكة التأمين الطبي والشركات' : 'Medical Insurance Network'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {isAr ? (
              <>
                شراكات معتمدة مع أكثر من <br />
                <span className="text-gradient">٣٠ شركة تأمين طبي بمصر</span>
              </>
            ) : (
              <>
                Direct Cashless Dispensing with <br />
                <span className="text-gradient">30+ Medical Insurance Providers</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'نقدم خدمة صرف إلكتروني سلسة لأدوية الروشتات والأمراض المزمنة دون الحاجة للانتظار في الطوابير أو المراجعات المعقدة.'
              : 'Effortless electronic claim approvals and home delivery for policyholders across Egypt’s major corporate healthcare plans.'}
          </p>
        </div>

        {/* 3 Step Workflow */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 relative group hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white font-display font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-teal-800/20">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Insurance Partners Logo / Cards Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                {isAr ? 'شركاء التأمين الطبي المتعاقد معهم' : 'Accredited Insurance Partners'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {isAr
                  ? 'صرف فوري لكافة البطاقات الذكية، خطابات التحمل، وموافقات التأمين'
                  : 'Fast e-clearance and instant claims for health cards and approval vouchers'}
              </p>
            </div>

            <button
              onClick={onOpenPrescription}
              className="px-6 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition-all shrink-0"
            >
              {isAr ? 'اصرف روشتة التأمين الآن' : 'Dispense Insurance Rx'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INSURANCE_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800">
                      {partner.approvalSpeed}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{partner.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{partner.category}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-semibold text-slate-600">
                  {partner.coverageType}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              {isAr
                ? 'هل شركتك غير مدرجة بالقائمة؟ نحن معتمدون لدى كبرى شبكات الرعاية والنقابات المهنية. اتصل بـ 19800 للتأكيد الفوري.'
                : 'Is your corporate plan not listed? We partner with all leading TPAs and syndicates. Call 19800 for instant eligibility verification.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
