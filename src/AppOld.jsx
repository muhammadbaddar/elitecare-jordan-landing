import React, { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('ar')
  const t = {
    ar: {
      nav_packages: 'الباقات',
      nav_why: 'لماذا نحن',
      nav_contact: 'تواصل',
      cta: 'احجز استشارتك الآن',
      hero_title: 'EliteCare Jordan',
      hero_sub1: 'السياحة العلاجية في الأردن',
      hero_sub2: 'Medical Tourism & Wellness in Jordan',
      about_title: 'عن خدماتنا',
      about_body:
        'في EliteCare Jordan نمنحك تجربة علاجية متكاملة تجمع بين الرعاية الطبية المتميزة والإقامة الفاخرة والمتابعة الشخصية على مدار الساعة، لنضمن لك رحلة علاج مريحة وآمنة.',
      packages_title: 'الباقات العلاجية',
      packages_desc:
        'خيارات علاجية متكاملة تجمع بين الطب الحديث والرعاية المتميزة.',
      p1: 'جراحة التجميل — بإشراف نخبة الأطباء وخدمة فندقية راقية.',
      p2: 'طب الأسنان — ابتسامة جديدة بتقنيات زراعة وتجميل حديثة.',
      p3: 'العلاج الطبيعي — جلسات تأهيل وعناية بإشراف مختصين.',
      p4: 'الفحوصات الشاملة — تحاليل دقيقة وخطة علاجية متكاملة.',
      why_title: 'اختيارك لنا… هو أول خطوة للشفاء',
      why_desc:
        'لأننا نؤمن أن العلاج لا يبدأ في المستشفى، بل في الراحة النفسية والثقة. مع EliteCare Jordan لن تكون مجرد مريض، بل ضيف بين أهله. نحن نهتم بتفاصيل رحلتك من لحظة وصولك وحتى عودتك سالمًا، نوفر لك أفضل الأسعار والمتابعة اليومية مع الفريق الطبي والإقامة المريحة في أرقى الفنادق، مع ترتيب كافة الإجراءات لتعيش تجربة علاجية بلا قلق.',
      contact_title: 'تواصل معنا',
      contact_desc:
        'نحن هنا لخدمتك في كل خطوة من رحلتك العلاجية — اتصل بنا وسيسعد فريقنا بمساعدتك فورًا.',
      email: '📧 info@travego.co',
      phone: '💬 +962785612500',
      footer:
        '© جميع الحقوق محفوظة — EliteCare Jordan. صُمم هذا الموقع لعرض خدمات السياحة العلاجية في الأردن.',
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
      about_title: 'About Our Services',
      about_body:
        'At EliteCare Jordan, we provide an exceptional healing experience — world-class medical care, luxury accommodations, and dedicated personal support throughout your journey.',
      packages_title: 'Medical Packages',
      packages_desc:
        'Comprehensive treatment options combining modern medicine with exceptional care.',
      p1: 'Plastic Surgery — Top surgeons & 5-star recovery suites.',
      p2: 'Dental Care — Smile design & advanced implants.',
      p3: 'Physical Therapy — Expert rehabilitation programs.',
      p4: 'Comprehensive Checkups — Detailed diagnostics & wellness plans.',
      why_title: 'Choosing Us Is Your First Step to Healing',
      why_desc:
        'Because healing begins with trust and comfort, not just treatment. With EliteCare Jordan, you’re not a patient — you’re family. We take care of every detail of your journey, from your arrival to full recovery, offering the best prices, daily medical follow-ups, luxury accommodation, and full coordination of all procedures — so you can focus on your well-being, not the logistics.',
      contact_title: 'Contact Us',
      contact_desc:
        'We’re here to support you every step of the way — reach out and our team will assist you immediately.',
      email: '📧 info@travego.co',
      phone: '💬 +962785612500',
      footer:
        '© All rights reserved — EliteCare Jordan. Designed to showcase medical tourism excellence in Jordan.',
      switch: 'العربية'
    }
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const align = lang === 'ar' ? 'text-right' : 'text-left'

  return (
    <div
      dir={dir}
      className={`bg-white text-gray-900 ${align}`}
      style={{
        fontFamily:
          lang === 'ar'
            ? 'Cairo, sans-serif'
            : 'Playfair Display, serif'
      }}
    >
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
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-eliteGold text-white hover:opacity-90"
            >
              {t[lang].cta}
            </a>
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
          <h1 className="text-5xl md:text-6xl font-bold text-eliteGold mb-4 tracking-wide">
            {t[lang].hero_title}
          </h1>
          <p className="text-lg">{t[lang].hero_sub1}</p>
          <p className="text-base text-gray-100 italic">
            {t[lang].hero_sub2}
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-eliteGold text-white text-lg hover:opacity-90 shadow-lg"
            >
              {t[lang].cta}
            </a>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-eliteGold to-amber-500 bg-clip-text text-transparent drop-shadow-sm tracking-wide">
            {t[lang].packages_title}
          </h2>
          <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto mb-12">
            {t[lang].packages_desc}
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[t[lang].p1, t[lang].p2, t[lang].p3, t[lang].p4].map((desc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-eliteNavy mb-2">
                  {desc.split(' — ')[0]}
                </h3>
                <p className="text-gray-700">{desc.split(' — ')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-eliteGold to-amber-500 bg-clip-text text-transparent drop-shadow-sm tracking-wide">
            {t[lang].why_title}
          </h2>
          <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto mb-10">
            {lang === 'ar'
              ? 'نرافقك بثقة واهتمام لتجربة علاجية بلا قلق.'
              : 'We accompany you with care for a stress-free healing journey.'}
          </p>
          <p className="text-eliteNavy/90 leading-8 text-lg">
            {t[lang].why_desc}
          </p>
        </div>
      </section>

      {/* Contact */}
     {/* Contact */}
{/* Contact */}
<section id="contact" className="py-24 bg-eliteNavy text-white relative overflow-hidden">
  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-eliteGold drop-shadow-sm tracking-wide">
      {t[lang].contact_title}
    </h2>

    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
      {t[lang].contact_desc}
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/962785612500?text=مرحبا،%20أرغب%20بمعرفة%20تفاصيل%20العلاج%20والإقامة%20في%20الأردن."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold shadow-lg hover:from-green-400 hover:to-green-500 transform hover:-translate-y-1 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.169 1.605 5.982L0 24l6.273-1.638A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.773 9.773 0 01-4.982-1.367l-.357-.21-3.726.972.997-3.637-.231-.374A9.79 9.79 0 012.182 12C2.182 6.592 6.592 2.182 12 2.182S21.818 6.592 21.818 12 17.408 21.818 12 21.818zM17.07 14.93c-.292-.146-1.729-.854-1.996-.95-.268-.098-.463-.146-.659.146-.196.293-.756.95-.927 1.145-.17.195-.341.22-.633.073-.292-.146-1.232-.454-2.348-1.448-.868-.773-1.454-1.729-1.625-2.021-.17-.293-.018-.45.128-.596.132-.132.293-.341.439-.512.146-.171.195-.293.293-.487.098-.195.049-.366-.024-.512-.073-.146-.659-1.586-.902-2.172-.237-.57-.479-.492-.659-.5h-.563c-.171 0-.512.073-.78.366s-1.024 1-1.024 2.439 1.048 2.827 1.195 3.024c.146.195 2.065 3.156 5.006 4.424.701.303 1.248.484 1.674.62.703.224 1.343.192 1.85.117.564-.083 1.729-.708 1.973-1.392.244-.683.244-1.268.171-1.392-.073-.122-.268-.195-.56-.341z" />
        </svg>
        {lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@travego.co"
        className="group flex items-center gap-3 px-8 py-3 rounded-full border-2 border-eliteGold text-eliteGold hover:bg-gradient-to-r hover:from-eliteGold hover:to-amber-500 hover:text-white text-lg font-semibold transition-all duration-300 shadow-md transform hover:-translate-y-1"
      >
        ✉️ {lang === 'ar' ? 'أرسل بريد إلكتروني' : 'Send Email'}
      </a>
    </div>
  </div>

  {/* خلفية زخرفية ناعمة */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,0,0.06),transparent_70%)]"></div>
</section>



      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 bg-gray-100">
        {t[lang].footer}
      </footer>
    </div>
  )
}
