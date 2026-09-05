import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, Star, CheckCircle2, Search, 
  ExternalLink, Sparkles, Filter, AlertCircle 
} from 'lucide-react';
import { PRODUCTS_SHOWCASE, BRANCH_WHATSAPP } from '../data';
import { PharmacyProduct } from '../types';

interface ProductCatalogProps {
  lang: 'en' | 'ar';
  onOpenPrescription: () => void;
}

export function ProductCatalog({ lang, onOpenPrescription }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const isAr = lang === 'ar';

  const categories = [
    { id: 'all', label: isAr ? 'جميع المنتجات' : 'All Products' },
    { id: 'dermacosmetics', label: isAr ? 'العناية بالبشرة' : 'Dermacosmetics' },
    { id: 'devices', label: isAr ? 'الأجهزة الطبية' : 'Medical Devices' },
    { id: 'baby', label: isAr ? 'الأم والطفل' : 'Mother & Baby' },
    { id: 'vitamins', label: isAr ? 'الفيتامينات والمكملات' : 'Vitamins' },
  ];

  const filteredProducts = PRODUCTS_SHOWCASE.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderWhatsApp = (product: PharmacyProduct) => {
    const message = encodeURIComponent(
      `مرحباً صيدليات البنداري، أود طلب المنتج التالي:\n` +
      `• اسم المنتج: ${product.name}\n` +
      `• السعر: ${product.price} جنيه مصري\n` +
      `• الماركة: ${product.brand}\n` +
      `يرجى تأكيد التوافر والتوصيل.`
    );
    window.open(`https://wa.me/${BRANCH_WHATSAPP}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              {isAr ? 'الأكثر طلباً وموثوقية' : 'Curated Essentials & Best Sellers'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              {isAr ? (
                <>
                  منتجات طبية وتجميلية <br />
                  <span className="text-gradient">أصلية ١٠٠٪ بأفضل الأسعار</span>
                </>
              ) : (
                <>
                  Healthcare, Beauty & <br />
                  <span className="text-gradient">Certified Medical Essentials</span>
                </>
              )}
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            {isAr
              ? 'مجموعة مختارة من أشهر الماركات العالمية المعتمدة في أجهزة قياس الضغط والسكر، مستحضرات العناية الفرنسية، ومكملات المناعة.'
              : 'Directly sourced from official brand agents with guaranteed origin, cold storage assurance, and express home delivery.'}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder={isAr ? 'ابحث في المنتجات...' : 'Filter products...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 font-semibold text-sm">
              {isAr ? 'لم يتم العثور على منتجات مطابقة' : 'No products found matching your search.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-red-600 font-bold underline"
            >
              {isAr ? 'إعادة ضبط البحث' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-red-300 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Brand & Stock Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full truncate">
                      {product.brand}
                    </span>
                    <div className="flex items-center text-amber-500 text-xs font-bold shrink-0">
                      <Star className="w-3.5 h-3.5 fill-current mr-0.5" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-red-600 transition-colors line-clamp-2">
                    {isAr ? product.nameAr : product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Order Action */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-extrabold text-slate-900 font-display">
                      {product.price}
                    </span>
                    <span className="text-xs font-bold text-slate-600">
                      {isAr ? 'ج.م' : 'EGP'}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {product.originalPrice} {isAr ? 'ج.م' : 'EGP'}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOrderWhatsApp(product)}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                    </button>

                    <button
                      onClick={onOpenPrescription}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-800 hover:text-red-700 text-xs font-bold transition-all flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{isAr ? 'طلب سريع' : 'Quick Order'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Prescription Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-red-950 via-red-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
              {isAr ? 'خدمة توفير النواقص' : 'Missing a prescription medication?'}
            </span>
            <h3 className="font-display text-2xl font-bold">
              {isAr
                ? 'هل تبحث عن دواء غير متوفر أو روشتة معقدة؟'
                : 'Need a specialized or hard-to-find medication?'}
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              {isAr
                ? 'نمتلك شبكة توريد دوائية فورية تغطي كافة فروع القاهرة والمحافظات لتوفير دوائك خلال ساعات معدودة.'
                : 'Our central procurement hub tracks inventory across all 15+ branches to source rare medications and biologics promptly.'}
            </p>
          </div>

          <button
            onClick={onOpenPrescription}
            className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shrink-0 transition-all shadow-lg shadow-red-600/30"
          >
            {isAr ? 'ارفع روشتتك للبحث الفوري' : 'Request Medicine Check'}
          </button>
        </div>
      </div>
    </section>
  );
}
