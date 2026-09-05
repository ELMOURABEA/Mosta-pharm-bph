import { useState, useRef, type ChangeEvent, type DragEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, UploadCloud, CheckCircle2, ShieldCheck, Phone, MapPin, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { BRANCHES_DATA, INSURANCE_PARTNERS, BRANCH_WHATSAPP } from '../data';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'ar';
}

export function PrescriptionModal({ isOpen, onClose, lang = 'en' }: PrescriptionModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Cairo');
  const [address, setAddress] = useState('');
  const [insurance, setInsurance] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderCode, setOrderCode] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAr = lang === 'ar';

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      if (selected.type.startsWith('image/')) {
        setFilePreview(URL.createObjectURL(selected));
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selected = e.dataTransfer.files[0];
      setFile(selected);
      if (selected.type.startsWith('image/')) {
        setFilePreview(URL.createObjectURL(selected));
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone || !address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `BND-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderCode(code);
      setIsSubmitting(false);
      setOrderSubmitted(true);
    }, 900);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `مرحباً صيدليات البنداري، أود تأكيد طلبي لروشتة برقم مرجعي: ${orderCode}\n` +
      `الاسم: ${name || 'عميل'}\n` +
      `رقم الهاتف: ${phone}\n` +
      `العنوان: ${city} - ${address}\n` +
      (insurance ? `التأمين: ${insurance}\n` : '') +
      (notes ? `ملاحظات: ${notes}\n` : '') +
      `يرجى التأكيد والتوصيل السريع.`
    );
    window.open(`https://wa.me/${BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  const resetModal = () => {
    setFile(null);
    setFilePreview(null);
    setName('');
    setPhone('');
    setAddress('');
    setInsurance('');
    setNotes('');
    setOrderSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {isAr ? 'خدمة الروشتة السريعة' : 'Instant Prescription Service'}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                {isAr ? 'اطلب روشتتك أو أدويتك الآن' : 'Upload Prescription & Order'}
              </h3>
              <p className="text-rose-100 text-sm mt-1 max-w-md">
                {isAr
                  ? 'ارفع صورة الروشتة أو كارنيه التأمين، وسيصلك اتصال من الصيدلي لتأكيد الأصناف والتوصيل خلال ٣٠ دقيقة.'
                  : 'Upload your doctor prescription or insurance card. Our licensed pharmacist will review it and deliver in 20-35 mins.'}
              </p>
            </div>
            <button
              onClick={resetModal}
              className="relative z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {orderSubmitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full">
                    {isAr ? 'تم استلام الطلب بنجاح' : 'Order Received Successfully'}
                  </span>
                  <h4 className="font-display text-2xl font-bold text-slate-800 mt-3">
                    {isAr ? 'الرقم المرجعي لطلبك:' : 'Your Order Reference:'}
                  </h4>
                  <div className="mt-2 inline-block px-5 py-2.5 bg-slate-100 rounded-xl font-mono text-xl font-bold text-red-800 border border-slate-200 tracking-wider">
                    {orderCode}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-sm text-slate-600 space-y-2 text-left max-w-md mx-auto">
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-500">{isAr ? 'الاسم:' : 'Patient:'}</span>
                    <span className="font-semibold text-slate-800">{name || 'Customer'}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-500">{isAr ? 'الهاتف:' : 'Phone:'}</span>
                    <span className="font-semibold text-slate-800">{phone}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-500">{isAr ? 'المنطقة:' : 'Area:'}</span>
                    <span className="font-semibold text-slate-800">{city}</span>
                  </p>
                  {file && (
                    <p className="flex justify-between">
                      <span className="font-medium text-slate-500">{isAr ? 'الملف المرفق:' : 'Prescription File:'}</span>
                      <span className="font-semibold text-red-700 truncate max-w-[180px]">{file.name}</span>
                    </p>
                  )}
                  <p className="flex justify-between border-t border-slate-200 pt-2 text-red-700 font-semibold">
                    <span>{isAr ? 'وقت التوصيل التقديري:' : 'Estimated Delivery:'}</span>
                    <span>20 - 35 mins</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    {isAr ? 'متابعة المحادثة في واتساب' : 'Track on WhatsApp'}
                  </button>
                  <button
                    onClick={resetModal}
                    className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
                  >
                    {isAr ? 'إغلاق النافذة' : 'Done'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Drag and Drop Zone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {isAr ? 'صورة الروشتة أو علبة الدواء أو كارت التأمين' : 'Prescription, Medicine Box or Insurance Card'}
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-red-300 hover:border-red-500 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-red-50/40 hover:bg-red-50/70 relative"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {filePreview ? (
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src={filePreview}
                          alt="Prescription preview"
                          className="w-32 h-32 object-cover rounded-xl shadow-md border-2 border-white"
                        />
                        <div className="flex items-center gap-2 text-red-800 font-medium text-sm">
                          <CheckCircle2 className="w-4 h-4 text-red-600" />
                          <span>{file?.name}</span>
                        </div>
                        <span className="text-xs text-slate-500 underline">{isAr ? 'اضغط لتغيير الصورة' : 'Click to change image'}</span>
                      </div>
                    ) : file ? (
                      <div className="flex flex-col items-center gap-2">
                        <FileText className="w-12 h-12 text-red-600" />
                        <span className="font-semibold text-slate-800 text-sm">{file.name}</span>
                        <span className="text-xs text-slate-500 underline">{isAr ? 'اضغط لتغيير الملف' : 'Click to change file'}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-slate-800">
                          {isAr ? 'اضغط لاختيار صورة الروشتة أو اسحبها هنا' : 'Click to upload prescription or drag & drop'}
                        </p>
                        <p className="text-xs text-slate-500">
                          {isAr ? 'ندعم صور الهاتف والكاميرا ومستندات PDF' : 'Supports JPG, PNG, PDF up to 15MB'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Patient Information */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      {isAr ? 'اسم العميل / المريض' : 'Patient Name'}
                    </label>
                    <input
                      type="text"
                      placeholder={isAr ? 'مثال: محمد السيد' : 'e.g. Tarek Mansour'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      {isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="010 / 011 / 012 / 015..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Location & City */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      {isAr ? 'المحافظة / الفرع الأقرب' : 'City / Nearest Region'}
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm bg-white"
                    >
                      <option value="Cairo & Giza">Cairo & Giza (Mohandessin & Surrounding)</option>
                      <option value="Tanta">Tanta (All 13 Branch Locations)</option>
                      <option value="Alexandria">Alexandria (Soon)</option>
                      <option value="New Capital">New Administrative Capital (Soon)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      {isAr ? 'شركة التأمين الطبي (إن وجد)' : 'Medical Insurance (Optional)'}
                    </label>
                    <select
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm bg-white"
                    >
                      <option value="">{isAr ? 'بدون تأمين (كاش أو محفظة)' : 'None (Cash / Card on Delivery)'}</option>
                      {INSURANCE_PARTNERS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Detailed Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {isAr ? 'العنوان التفصيلي للتوصيل *' : 'Delivery Address (Street, Building, Apt) *'}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder={isAr ? 'الشارع، رقم العمارة، الشقة، أو علامة مميزة' : 'Street name, building number, floor/apartment or landmark'}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Special Instructions / Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {isAr ? 'ملاحظات إضافية للصيدلي (اختياري)' : 'Notes for Pharmacist (Optional)'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={isAr ? 'مثال: أحتاج بديلاً بنفس المادة الفعالة، أو التوصيل بعد الساعة ٥ مساءً' : 'e.g., Please check for generic alternatives or cold-pack storage'}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm resize-none"
                  />
                </div>

                {/* Safety Guarantee Info */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50 border border-red-100 text-xs text-red-800">
                  <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p>
                    {isAr
                      ? 'جميع الأدوية تصرف من صيدليات مرخصة من وزارة الصحة المصرية، مع حفظ صارم لسلسلة التبريد ومراجعة طبية مجانية لتفاعلات الأدوية.'
                      : 'All medications are officially dispensed by MOH-licensed pharmacists with cold-chain verification and complimentary drug interaction screening.'}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetModal}
                    className="px-5 py-2.5 text-slate-600 hover:text-slate-800 font-medium text-sm transition-colors"
                  >
                    {isAr ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/20 transition-all text-sm flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {isAr ? 'جاري المعالجة...' : 'Processing...'}
                      </span>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4" />
                        {isAr ? 'إرسال الروشتة وتأكيد الطلب' : 'Submit Prescription'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
