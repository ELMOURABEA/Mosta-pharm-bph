import { motion } from 'motion/react';
import { 
  Building2, Pill, ShieldCheck, Heart, Award, 
  CheckCircle2, Clock, Users, MapPin, Sparkles 
} from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'ar';
  onOpenPrescription: () => void;
}

export function About({ lang, onOpenPrescription }: AboutProps) {
  const isAr = lang === 'ar';

  const milestones = [
    { year: '1980', title: isAr ? 'انطلاقة أول صيدلية' : 'First Pharmacy Founded', desc: isAr ? 'تأسيس أول فرع لخدمة المجتمع برؤية طبية إنسانية' : 'Established our flagship community pharmacy with clinical dedication.' },
    { year: '1998', title: isAr ? 'ريادة منطقة الدلتا' : 'Delta & Tanta Flagship', desc: isAr ? 'افتتاح فروع طنطا الكبرى أمام كلية الطب لخدمة محافظة الغربية' : 'Opened comprehensive medical hubs across Tanta and the Delta.' },
    { year: '2012', title: isAr ? 'توسع القاهرة الكبرى' : 'Greater Cairo Network', desc: isAr ? 'فروع متميزة في مصر الجديدة، مدينة نصر، المعادي، والتجمع الخامس' : 'Launched key branches in Heliopolis, New Cairo, Nasr City, and Maadi.' },
    { year: '2020', title: isAr ? 'فروع الساحل وشرم الشيخ' : 'Coastal & Resort Hubs', desc: isAr ? 'تغطية الساحل الشمالي (مراسي، هاسيندا، مارينا) وشرم الشيخ بخدمات ٢٤/٧' : 'Established 24/7 hubs in Marassi, Hacienda, Marina, and Sharm El-Sheikh.' },
    { year: '2027', title: isAr ? 'الإسكندرية والعاصمة' : 'Alexandria & New Capital', desc: isAr ? 'توسع استراتيجي قادم في شارع فؤاد التراثي وحي المال والأعمال' : 'Strategic expansion to Alexandria (Fouad St) & New Capital (CBD).' },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: isAr ? 'أدوية أصلية مضمونة ١٠٠٪' : '100% Genuine Origin',
      desc: isAr ? 'توريد مباشر من الشركات العالمية والمحلية المعتمدة دون أي وسطاء مجهولين.' : 'Sourced directly from certified manufacturers with rigorous batch tracing.'
    },
    {
      icon: Clock,
      title: isAr ? 'سلسلة تبريد دوائية صارمة' : 'Cold-Chain Integrity',
      desc: isAr ? 'حفظ الأنسولين والأمصال في درجات حرارة ٢-٨ مئوية بحقائب مبردة معتمدة.' : 'Strict isothermal protocols preserving insulin and biologicals from fridge to doorstep.'
    },
    {
      icon: Heart,
      title: isAr ? 'استشارات سريرية مجانية' : 'Clinical Consultation',
      desc: isAr ? 'صيادلة متميزون لمراجعة الجرعات والتعارضات الدوائية وقياس الضغط والسكر مجاناً.' : 'Licensed pharmacists providing dosage guidance and drug interaction screening.'
    },
    {
      icon: Award,
      title: isAr ? 'شراكات مع +٣٠ شركة تأمين' : '30+ Insurance Networks',
      desc: isAr ? 'صرف فوري وإلكتروني لأغلب بطاقات التأمين الصحي الخاصة والنقابات.' : 'Instant cashless co-pay dispensing for major Egyptian corporate insurers.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Background gradient block */}
              <div className="w-full aspect-4/5 rounded-[2.5rem] bg-gradient-to-br from-red-50 via-rose-100/40 to-red-50 border border-red-100 p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-red-900/5">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {isAr ? 'أربعة عقود من العطاء والرعاية' : 'Four Decades of Healthcare Leadership'}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {isAr
                      ? 'منذ تأسيس صيدليات البنداري في عام 1980، وضعنا صحة المواطن المصري نصب أعيننا، لنصبح اليوم علامة موثوقة تمتد عبر المحافظات.'
                      : 'Founded in 1980, El-Bendary Pharmacies has built a legacy of uncompromised pharmaceutical integrity across Cairo, Giza, and Tanta.'}
                  </p>
                </div>

                {/* Bottom Snapshot Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{isAr ? 'ترخيص وزارة الصحة المصرية' : 'MOH Egypt Licensed'}</span>
                    <span className="text-red-600 font-bold">✓ Active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-center">
                    <div>
                      <p className="text-2xl font-extrabold text-red-600">1980</p>
                      <p className="text-[11px] text-slate-500">{isAr ? 'سنة التأسيس' : 'Year Founded'}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-slate-900">15+</p>
                      <p className="text-[11px] text-slate-500">{isAr ? 'فرع رئيسي' : 'Active Branches'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 1980 Stamp Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-700 to-rose-700 text-white p-6 rounded-3xl shadow-xl shadow-red-800/30 text-center border-4 border-white">
                <span className="text-xs uppercase font-bold tracking-widest text-red-200 block">
                  {isAr ? 'تأسست' : 'Est.'}
                </span>
                <span className="text-4xl font-extrabold font-display leading-tight">1980</span>
                <span className="text-[11px] font-semibold text-red-100 block mt-0.5">
                  {isAr ? 'مصر' : 'Cairo, Egypt'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100/80 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                {isAr ? 'قصة نجاح صيدليات البنداري' : 'Our Heritage & Mission'}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {isAr ? (
                  <>
                    ريادة الرعاية الصيدلانية <br />
                    <span className="text-gradient">منذ أكثر من 40 عاماً</span>
                  </>
                ) : (
                  <>
                    Setting the Standard in <br />
                    <span className="text-gradient">Egyptian Healthcare Since 1980</span>
                  </>
                )}
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isAr
                ? 'انطلقت صيدليات البنداري برؤية واضحة: أن تكون الرعاية الصيدلانية أكثر من مجرد صرف دواء، بل علاقة ثقة ورعاية إنسانية متكاملة. على مدار أكثر من أربعة عقود، توسعنا لتغطية أهم مدن ومحافظات مصر: من فرعنا في المهندسين بالقاهرة والجيزة إلى شبكتنا الواسعة في طنطا بكافة أحيائها (شارع الجلاء، البورصة، كفر عصام، شارع سعيد، الأشرف، المحافظة، وطريق إسكندرية الزراعي)، مع خطط التوسع المرتقبة في الإسكندرية والعاصمة الإدارية الجديدة.'
                : 'Founded in 1980, El-Bendary Pharmacies has evolved from a premier neighborhood provider into one of Egypt’s most respected pharmaceutical retail networks. With over 15 branches spanning Cairo, Giza (Mohandessin), and Tanta across its major hubs, we bring genuine medicine and patient-first consultations to families across the country.'}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-red-50/60 border border-slate-200/70 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPrescription}
                className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all"
              >
                {isAr ? 'اطلب أدويتك الآن' : 'Order Prescription Online'}
              </button>
              <a
                href="#branches"
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
              >
                {isAr ? 'استكشف شبكة فروعنا' : 'Explore All Branches'}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Milestones Horizontal Timeline */}
        <div className="mt-20 pt-16 border-t border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-red-700 text-xs font-bold uppercase tracking-wider">
              {isAr ? 'مسيرة الريادة' : 'Our Journey'}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {isAr ? 'محطات مضيئة في تاريخ البنداري' : 'Key Milestones Along the Decades'}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((m, i) => (
              <div 
                key={i} 
                className="relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all"
              >
                <span className="font-display text-2xl font-extrabold text-red-600 block mb-2">
                  {m.year}
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
