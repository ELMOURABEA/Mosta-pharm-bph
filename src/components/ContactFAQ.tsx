import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MessageSquare, ChevronDown, Send, 
  CheckCircle2, Clock, MapPin, Sparkles, HelpCircle 
} from 'lucide-react';
import { FAQS_DATA, HOTLINE_NUMBER, BRANCH_WHATSAPP } from '../data';

interface ContactFAQProps {
  lang: 'en' | 'ar';
}

export function ContactFAQ({ lang }: ContactFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isAr = lang === 'ar';

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            {isAr ? 'الأسئلة الشائعة وخدمة العملاء' : 'Frequently Asked Questions & Contact'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {isAr ? (
              <>
                نحن دائماً في خدمتك <br />
                <span className="text-gradient">على مدار الساعة ٢٤/٧</span>
              </>
            ) : (
              <>
                We Are Always Here <br />
                <span className="text-gradient">Ready to Support You 24/7</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'إجابات وافية لأهم التساؤلات حول التوصيل المنزلي، بطاقات التأمين، وسلسلة التبريد، بالإضافة لقنوات الاتصال المباشرة.'
              : 'Find instant answers to common questions about express delivery, insurance approval, or connect with our pharmacy team.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: FAQ Accordion */}
          <div id="faq" className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              <span>{isAr ? 'الأسئلة الأكثر تكراراً' : 'Common Inquiries'}</span>
            </h3>

            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all bg-white shadow-2xs hover:border-red-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-red-700 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold">
                      {isAr ? faq.questionAr : faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                      >
                        {isAr ? faq.answerAr : faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Direct Contact & Hotline Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24/7 Hotline Hero Box */}
            <div className="bg-gradient-to-br from-red-950 via-red-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  {isAr ? 'خدمة ٢٤ ساعة طوال الأسبوع' : '24/7 Round the Clock'}
                </span>

                <h3 className="font-display text-3xl font-extrabold">
                  {isAr ? `الخط الساخن: ${HOTLINE_NUMBER}` : `Direct Hotline: ${HOTLINE_NUMBER}`}
                </h3>
                <p className="text-rose-100 text-xs sm:text-sm leading-relaxed">
                  {isAr
                    ? 'فريق متخصص من الصيادلة ومندوبي التوصيل جاهز لتلقي اتصالاتك وتلبية كافة متطلباتك الدوائية.'
                    : `Dial ${HOTLINE_NUMBER} anytime. Instant dispatch from the closest branch directly to your home.`}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${HOTLINE_NUMBER}`}
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{isAr ? 'اتصل الآن' : `Call ${HOTLINE_NUMBER}`}</span>
                  </a>

                  <a
                    href={`https://wa.me/${BRANCH_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm transition-all flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90">
              <h4 className="font-display text-lg font-bold text-slate-900 mb-1">
                {isAr ? 'أرسل لنا استفسارك أو ملاحظتك' : 'Send us an Inquiry'}
              </h4>
              <p className="text-slate-500 text-xs mb-5">
                {isAr
                  ? 'يسعدنا الرد على أي استفسار دوائي أو اقتراح لخدمتكم بشكل أفضل.'
                  : 'We welcome pharmaceutical queries, feedback, or branch suggestions.'}
              </p>

              {submitted ? (
                <div className="text-center py-6 space-y-3 bg-white rounded-2xl p-6 border border-red-200">
                  <CheckCircle2 className="w-10 h-10 text-red-600 mx-auto" />
                  <p className="font-bold text-slate-800 text-sm">
                    {isAr ? 'شكراً لتواصلك معنا' : 'Thank You for Reaching Out'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'تم استلام رسالتك وسيتواصل معك الصيدلي المناوب قريباً.' : 'Your message has been received. Our duty pharmacist will respond shortly.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-red-600 underline"
                  >
                    {isAr ? 'إرسال رسالة أخرى' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={isAr ? 'الاسم بالكامل' : 'Full Name'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder={isAr ? 'رقم الهاتف *' : 'Phone Number *'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder={isAr ? 'اكتب رسالتك أو استفسارك هنا...' : 'Your inquiry or medicine request...'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 shadow-red-600/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال الاستفسار' : 'Submit Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
