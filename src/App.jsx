import React, { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('ar')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `الاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالدولة: ${formData.country}\nالرسالة: ${formData.message}`
    const encodedMsg = encodeURIComponent(msg)
    window.open(`https://wa.me/962785612500?text=${encodedMsg}`, '_blank')
    setShowForm(false)
  }

  const t = {
    ar: {
      nav_packages: 'الباقات',
      nav_why: 'اختيارك لنا',
      nav_contact: 'تواصل',
      cta: 'احجز استشارتك الآن',
      hero_title: 'EliteCare Jordan',
      hero_sub1: 'السياحة العلاجية في الأردن',
      hero_sub2: 'Medical Tourism & Wellness in Jordan',
      about_title: 'عن الأردن',
      about_body:
        'يُعد الأردن وجهة رائدة في مجال السياحة العلاجية في الشرق الأوسط، يجمع بين الرعاية الطبية المتقدمة والخدمات الفندقية الراقية، مما يجعله خيارًا مثاليًا للشفاء والاستجمام.',
      packages_title: 'باقات العلاج',
      contact_title: 'تواصل معنا',
      contact_desc:
        'نحن هنا لخدمتك في كل خطوة من رحلتك العلاجية — فريقنا جاهز للرد على استفساراتك وترتيب رحلتك من البداية حتى العودة.',
      footer:
        'تم تصميم هذا الموقع لعرض خدمات EliteCare Jordan — جميع الحقوق محفوظة.',
      switch: 'English'
    },
    en: {
      nav_packages: 'Packages',
      nav_why: 'Why Us',
      nav_contact: 'Contact',
      cta: 'Book Consultation',
      hero_title: 'EliteCare Jordan',
      hero_sub1: 'Medical Tourism in Jordan',
      hero_sub2: 'Wellness & Luxury Care',
      about_title: 'About Jordan',
      about_body:
        'Jordan is a leading destination for medical tourism in the Middle East, combining advanced healthcare with premium hospitality—an ideal choice for recovery and relaxation.',
      packages_title: 'Featured Packages',
      contact_title: 'Contact Us',
      contact_desc:
        'We are here to support your medical journey — our team is ready to answer your questions and arrange your trip from start to finish.',
      footer:
        'This website showcases EliteCare Jordan services — All rights reserved.',
      switch: 'العربية'
    }
  }

  const packages = lang === 'ar'
    ? [
        {
          icon: '💎',
          tag: 'Premium',
          title: 'جراحة التجميل',
          text: 'بإشراف نخبة من أطباء التجميل مع متابعة طبية دقيقة قبل وبعد الإجراء.',
          note: 'تشمل تنسيق المواعيد، الاستقبال من المطار وخيارات إقامة راقية.'
        },
        {
          icon: '😁',
          tag: 'Smile Care',
          title: 'طب الأسنان',
          text: 'ابتسامة جديدة بتقنيات زراعة وتجميل حديثة وتصميم ابتسامة يناسبك.',
          note: 'تشمل جدولة المواعيد المتتالية ومرافقة مترجم عند الحاجة.'
        },
        {
          icon: '🧩',
          tag: 'Rehab',
          title: 'العلاج الطبيعي',
          text: 'جلسات تأهيل وعناية مخصّصة لاستعادة الحركة وتقليل الألم بإشراف مختصين.',
          note: 'تشمل النقل من وإلى المركز وبرنامج متابعة بعد العودة لبلدك.'
        },
        {
          icon: '🧪',
          tag: 'Checkup',
          title: 'الفحوصات الشاملة',
          text: 'تحاليل دقيقة وصور تشخيصية مع تقرير طبي وخطة متابعة واضحة.',
          note: 'تشمل تنسيق أكبر عدد من الفحوصات في يوم واحد قدر الإمكان.'
        }
      ]
    : [
        {
          icon: '💎',
          tag: 'Premium',
          title: 'Plastic Surgery',
          text: 'Advanced cosmetic procedures with top surgeons and detailed pre/post care.',
          note: 'Includes appointment coordination, airport pick-up and luxury stay options.'
        },
        {
          icon: '😁',
          tag: 'Smile Care',
          title: 'Dental Care',
          text: 'Smile design, implants and cosmetic dentistry tailored to your needs.',
          note: 'Includes compact scheduling and translator support when needed.'
        },
        {
          icon: '🧩',
          tag: 'Rehab',
          title: 'Physical Therapy',
          text: 'Personalized rehabilitation programs to restore mobility and reduce pain.',
          note: 'Includes transfers to the center and follow-up program after you return home.'
        },
        {
          icon: '🧪',
          tag: 'Checkup',
          title: 'Comprehensive Checkups',
          text: 'Full diagnostics, lab tests and imaging with a clear medical report.',
          note: 'Includes coordination of most tests in a single visit when possible.'
        }
      ]

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const align = lang === 'ar' ? 'text-right' : 'text-left'

  return (
    <div dir={dir} className={`font-cairo bg-white text-gray-900 ${align}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-eliteGold">
            EliteCare Jordan
          </div>
          <nav className="hidden md:flex gap-6 text-eliteNavy/90">
            <a href="#packages" className="hover:text-eliteGold">
              {t[lang].nav_packages}
            </a>
            <a href="#why" className="hover:text-eliteGold">
              {t[lang].nav_why}
            </a>
            <a href="#contact" className="hover:text-eliteGold">
              {t[lang].nav_contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 rounded-full border border-eliteNavy/20 hover:bg-gray-50"
            >
              {t[lang].switch}
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 rounded-full bg-eliteGold text-white hover:opacity-90"
            >
              {t[lang].cta}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="min-h-[90vh] flex items-center justify-center text-center bg-cover bg-center relative pt-24"
        style={{ backgroundImage: "url('/images/deadsea.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-eliteNavy/70 to-eliteNavy/90"></div>
        <div className="relative max-w-3xl px-6 text-white drop-shadow-md">
          <h1 className="text-5xl md:text-6xl font-bold text-eliteGold mb-4">
            {t[lang].hero_title}
          </h1>
          <p className="text-lg">{t[lang].hero_sub1}</p>
          <p className="text-base text-gray-100 italic">
            {t[lang].hero_sub2}
          </p>
          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="inline-block px-6 py-3 rounded-full bg-eliteGold text-white hover:opacity-90"
            >
              {t[lang].cta}
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-eliteGold mb-4 text-center">
            {t[lang].about_title}
          </h2>
          <p className="text-eliteNavy/90 leading-8">{t[lang].about_body}</p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-center text-eliteGold">
            {t[lang].packages_title}
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            {lang === 'ar'
              ? 'نوفّر لك باقات علاجية متعدّدة لنفس التخصص، لتختار الأنسب لك من حيث الراحة ومستوى الخدمة وطبيعة البرنامج.'
              : 'We offer several package options within each specialty so you can choose what best fits your comfort, level of service and treatment plan.'}
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="relative p-7 rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                           border border-gray-100 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]
                           transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{pkg.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-eliteGold">
                    {pkg.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-eliteNavy mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-700 text-sm leading-7 mb-3">
                  {pkg.text}
                </p>
                <p className="text-eliteGold font-semibold text-xs leading-6">
                  {pkg.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-eliteGold mb-6">
            {lang === 'ar'
              ? 'اختيارك لنا… هو أول خطوة للشفاء'
              : 'Choosing Us Is Your First Step to Healing'}
          </h2>

          <p className="text-eliteNavy/90 leading-8 text-lg mb-8">
            {lang === 'ar'
              ? 'في EliteCare Jordan نؤمن أن العلاج الحقيقي يبدأ من الثقة والراحة قبل غرفة العمليات. معك نحصل على رعاية طبية بمستوى عالمي، بأسعار مدروسة، ومن خلال شبكة طبية واسعة من المستشفيات والأطباء المعتمدين في الأردن.'
              : 'At EliteCare Jordan, we believe true healing begins with trust and comfort before any procedure. With us, you receive world-class medical care at optimized prices, through a wide network of accredited hospitals and specialists across Jordan.'}
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base text-eliteNavy text-start">
            {lang === 'ar' ? (
              <>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • أسعارنا مدروسة بعناية وغالبًا أقل من كثير من الدول المجاورة لنفس مستوى الخدمة.
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • شبكة طبية واسعة تضم مستشفيات معتمدة وأطباء من مختلف التخصصات.
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • تنسيق كامل لرحلتك: مواعيد، فحوصات، إقامة، ونقل من وإلى المطار.
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • فريق متابعة مخصص لك قبل الوصول، أثناء الإقامة، وبعد العودة لبلدك.
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • Our prices are carefully optimized and often lower than many regional destinations for the same quality of care.
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • A wide medical network of accredited hospitals and multi-specialty physicians.
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • End-to-end coordination: appointments, diagnostics, accommodation and airport transfers.
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  • A dedicated follow-up team before arrival, during your stay and after you return home.
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-eliteNavy text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-eliteGold">
            {t[lang].contact_title}
          </h2>
          <p className="text-gray-300 text-lg mb-10">{t[lang].contact_desc}</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/962785612500?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold shadow-lg hover:from-green-400 hover:to-green-500 transform hover:-translate-y-1 transition-all duration-300"
            >
              💬 {lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
            </a>

            <a
              href="mailto:info@travego.co"
              className="group flex items-center gap-3 px-8 py-3 rounded-full border-2 border-eliteGold text-eliteGold hover:bg-gradient-to-r hover:from-eliteGold hover:to-amber-500 hover:text-white text-lg font-semibold transition-all duration-300 shadow-md transform hover:-translate-y-1"
            >
              ✉️ {lang === 'ar' ? 'أرسل بريد إلكتروني' : 'Send Email'}
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,0,0.06),transparent_70%)]"></div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 bg-gray-100">
        {t[lang].footer}
      </footer>

      {/* Consultation Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-eliteGold/40 shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-eliteGold text-2xl"
            >
              ×
            </button>
            <div className="flex justify-center mb-5">
              <img
                src="/images/logo.png"
                alt="EliteCare Jordan"
                className="w-16 h-16 rounded-full shadow-md border border-eliteGold/60"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center text-eliteGold drop-shadow-sm">
              {lang === 'ar' ? 'احجز استشارتك الآن' : 'Book Your Consultation'}
            </h2>
            <p className="text-gray-600 text-center mb-6 text-sm">
              {lang === 'ar'
                ? 'املأ المعلومات أدناه وسيتواصل معك فريقنا المختص في أقرب وقت.'
                : 'Please fill in your details and our team will contact you shortly.'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-eliteGold bg-white/80"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder={lang === 'ar' ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-eliteGold bg-white/80"
                required
              />
              <input
                type="text"
                name="country"
                placeholder={lang === 'ar' ? 'الدولة' : 'Country'}
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-eliteGold bg-white/80"
              />
              <textarea
                name="message"
                placeholder={
                  lang === 'ar'
                    ? 'صف حالتك أو نوع العلاج المطلوب'
                    : 'Describe your case or treatment needed'
                }
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-eliteGold bg-white/80"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-eliteGold to-amber-500 text-white py-3 rounded-full font-semibold text-lg hover:opacity-90 shadow-lg transition-all duration-300"
              >
                {lang === 'ar' ? 'إرسال الطلب' : 'Send Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
