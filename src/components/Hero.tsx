import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, ShieldCheck, Heart, Stethoscope, 
  Truck, ChevronDown, Star, Search, UploadCloud, 
  MapPin, CheckCircle2, Clock, Sparkles, Activity 
} from 'lucide-react';

interface HeroProps {
  onOpenPrescription: () => void;
  lang: 'en' | 'ar';
}

export function Hero({ onOpenPrescription, lang }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const isAr = lang === 'ar';

  const quickTags = [
    { label: 'Panadol Extra', query: 'Panadol' },
    { label: 'Vichy Mineral 89', query: 'Vichy' },
    { label: 'Accu-Chek Strips', query: 'Accu-Chek' },
    { label: 'CeraVe Moisturizer', query: 'CeraVe' },
    { label: 'Omega 3', query: 'Omega 3' },
  ];

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;
    const catalogEl = document.getElementById('products');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-red-50/20 to-rose-50/30">
      {/* Background Ambient Glows */}
      <div className="hero-glow -top-32 -right-32" />
      <div 
        className="hero-glow -bottom-32 -left-32" 
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/80 border border-red-200 text-red-900 text-xs sm:text-sm font-bold shadow-xs"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold">
                {isAr ? 'رواد الرعاية الصيدلانية بمصر منذ عام 1980 • ١٥+ فرعاً' : 'Trusted Since 1980 — 15+ Branches Across Egypt'}
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                {isAr ? (
                  <>
                    صحتك وسلامة عائلتك، <br />
                    <span className="text-gradient">رسالتنا منذ 1980</span>
                  </>
                ) : (
                  <>
                    Your Health, <br />
                    <span className="text-gradient">Our Life Mission</span>
                  </>
                )}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {isAr
                  ? 'سلسلة صيدليات مصرية رائدة تقدم أدوية أصلية مضمونة، أجهزة طبية معتمدة، مستحضرات تجميل عالمية، وتوصيل سريع ومبرّد ٢٤/٧ في القاهرة والجيزة وطنطا وكافة الفروع.'
                  : "Egypt's premier pharmacy chain delivering certified authentic medications, advanced medical diagnostics, premium dermacosmetics, and 24/7 cold-chain express delivery for over four decades."}
              </p>
            </motion.div>

            {/* Interactive Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-2 sm:p-2.5 rounded-2xl shadow-xl shadow-red-950/5 border border-slate-200/90 max-w-xl"
            >
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <div className="pl-3 text-slate-400">
                  <Search className="w-5 h-5 text-red-600" />
                </div>
                <input
                  type="text"
                  placeholder={
                    isAr
                      ? 'ابحث عن دواء، كريم بشرة، حليب أطفال، جهاز ضغط...'
                      : 'Search medications, skincare, baby milk, medical devices...'
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-2 text-sm text-slate-800 focus:outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-red-600/20 shrink-0"
                >
                  {isAr ? 'بحث' : 'Search'}
                </button>
              </form>

              {/* Quick suggestions */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 px-2">
                <span className="text-[11px] font-semibold text-slate-400">
                  {isAr ? 'شائع:' : 'Popular:'}
                </span>
                {quickTags.map((tag) => (
                  <button
                    key={tag.query}
                    onClick={() => {
                      setSearchTerm(tag.query);
                      const catalogEl = document.getElementById('products');
                      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 font-medium transition-colors"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenPrescription}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-700/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
              >
                <UploadCloud className="w-5 h-5 text-red-200" />
                <span>{isAr ? 'ارفع الروشتة للتوصيل السريع' : 'Upload Prescription Now'}</span>
              </button>

              <a
                href="#branches"
                className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm sm:text-base shadow-sm transition-all hover:border-red-500 hover:text-red-700 flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-red-600" />
                <span>{isAr ? 'فروعنا (١٥+ فرع)' : 'Find Nearest Branch'}</span>
              </a>
            </motion.div>

            {/* Stats Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">15+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {isAr ? 'فروع بمحافظات مصر' : 'Branches in Egypt'}
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-red-600 tracking-tight">30+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {isAr ? 'شركة تأمين معتمدة' : 'Insurance Partners'}
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">45+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {isAr ? 'عاماً من الثقة (1980)' : 'Years of Trust'}
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-rose-600 tracking-tight">25m</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {isAr ? 'متوسط سرعة الدليفري' : 'Avg Delivery Time'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Brand Card with Floating Holographic Badges */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative max-w-md mx-auto"
            >
              {/* Outer decorative layered backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-rose-400/20 to-amber-300/20 rounded-[3rem] rotate-3 scale-105 filter blur-xs" />

              {/* Main Card Container */}
              <div className="relative bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-red-900/10 border border-slate-100 overflow-hidden text-center">
                {/* Background watermarked emblem */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-red-50 rounded-full opacity-70 pointer-events-none" />

                {/* Animated Emblem */}
                <div className="w-36 h-36 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-rose-700 p-1 shadow-xl shadow-red-700/25 flex items-center justify-center animate-float">
                  <div className="w-full h-full rounded-[1.35rem] bg-gradient-to-br from-red-700 to-rose-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial from-white/20 to-transparent opacity-60" />
                    <Heart className="w-14 h-14 text-white drop-shadow-md mb-1" />
                    <span className="text-[11px] font-bold tracking-widest uppercase text-red-200">
                      CARE • TRUST
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                    <span>MOH Egypt Licensed Chain</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    El-Bendary Pharmacies
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-xs mx-auto">
                    {isAr
                      ? 'صيدليات عائلية عريقة، رعاية طبية متقدمة، وأدوية معتمدة تصلك حيثما كنت.'
                      : 'Egyptian healthcare heritage delivering clinical accuracy, trusted medications, and compassionate service.'}
                  </p>
                </div>

                {/* Quick Action in Card */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-red-600" />
                    24/7 Hours
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4 text-rose-600" />
                    Express Dispatch
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right - Cold-Chain Assurance */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">Cold-Chain</p>
                  <p className="text-[10px] text-red-700 font-semibold">2°C – 8°C Verified</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - Fast Delivery */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">Home Delivery</p>
                  <p className="text-[10px] text-amber-600 font-semibold">20–35 min door-to-door</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Center Left - Licensed Pharmacists */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-slate-100 items-center gap-2.5 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 leading-none">Clinical Pharmacist</p>
                  <p className="text-[10px] text-slate-500">24/7 on call</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-400 hover:text-red-600 transition-colors animate-bounce hidden md:block"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
