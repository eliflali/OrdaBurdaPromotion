import React, { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Background Pattern Image */}
      <div className="absolute inset-0 w-full h-[1255px] overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f5838b12a2231b55853954bc98432c585daa149a?width=2880" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center pt-[120px] gap-[100px] pb-0">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1320px] px-[60px] gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start gap-[35px] flex-1">
            {/* Logo */}
            <div className="flex flex-col items-start gap-3">
              <h1 className="font-afacad text-[120px] md:text-[178px] font-bold text-[#252525] leading-[0.75] tracking-[-3.56px]">
                ordaburda
              </h1>
              <p className="font-afacad text-[24px] md:text-[36px] font-bold text-[#252525] tracking-[-0.54px]">
                anı yaşa, hayatı keşfet
              </p>
            </div>
            
            {/* Description */}
            <p className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px] leading-relaxed">
              Çevrenizdeki heyecan verici etkinlikleri keşfedin, yeni arkadaşlar edinin ve unutulmaz anılar yaratın. İlgi alanlarınızı paylaşan topluluklara katılın ve ortak deneyimler aracılığı ile anlamlı bağlantılar kurun.
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center items-center w-full max-w-[434px] h-[672px] pr-0 lg:pr-[100px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/eae47b2679641d5ddb07ba2f0246bd72c0c71ed2?width=668" 
              alt="ordaburda mobile app"
              className="h-[655px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Quote Section */}
        <h2 className="font-afacad text-[40px] md:text-[64px] font-bold text-[#252525] text-center tracking-[-1.28px] px-4">
          "Gerçek hikayeler biriktir, gerçek arkadaşlar edin"
        </h2>

        {/* Features Introduction */}
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-[#F1F1F1] px-[60px] py-8 gap-8">
            {/* Illustration */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/833a9b6f0b76dc0f93efa900c83f49cb751a5a7c?width=1080" 
              alt="Features illustration"
              className="w-full max-w-[540px] h-auto object-contain"
            />
            
            {/* Right Content */}
            <div className="flex flex-col justify-center items-start gap-[35px] w-full max-w-[688px]">
              <h3 className="font-afacad text-[28px] md:text-[36px] font-bold text-[#252525] tracking-[-0.54px]">
                Hayatı keşfetmeye hazır mısın?
              </h3>
              
              <div className="flex flex-col items-start gap-8 w-full">
                {/* Feature Items */}
                <div className="flex items-center gap-4 w-full">
                  <svg className="w-[58px] h-[58px] flex-shrink-0" viewBox="0 0 58 59" fill="none">
                    <path d="M20.2403 39.7738L32.4445 36.2696C33.25 36.028 33.9452 35.6147 34.53 35.0299C35.1149 34.4451 35.5273 33.7507 35.7674 32.9467L39.2715 20.7426C39.3924 20.2995 39.282 19.9064 38.9405 19.5632C38.5989 19.2201 38.2058 19.1097 37.7611 19.2321L25.557 22.7363C24.7514 22.978 24.057 23.3912 23.4738 23.9761C22.8906 24.5609 22.4773 25.2553 22.234 26.0592L18.7299 38.2634C18.609 38.7064 18.7202 39.0996 19.0634 39.4427C19.4065 39.7859 19.7989 39.8962 20.2403 39.7738ZM29.0007 33.128C27.9938 33.128 27.1383 32.7759 26.4342 32.0719C25.7302 31.3678 25.3773 30.5115 25.3757 29.503C25.3741 28.4944 25.7269 27.6389 26.4342 26.9365C27.1415 26.234 27.997 25.8812 29.0007 25.878C30.0044 25.8747 30.8607 26.2276 31.5696 26.9365C32.2785 27.6454 32.6305 28.5009 32.6257 29.503C32.6209 30.5051 32.2688 31.3614 31.5696 32.0719C30.8704 32.7824 30.0141 33.1344 29.0007 33.128ZM29.0007 53.6696C25.6577 53.6696 22.516 53.0349 19.5757 51.7653C16.6354 50.4957 14.0778 48.7743 11.9028 46.6009C9.7278 44.4275 8.00633 41.8699 6.73838 38.928C5.47044 35.9861 4.83566 32.8444 4.83405 29.503C4.83244 26.1615 5.46722 23.0199 6.73838 20.078C8.00955 17.1361 9.73102 14.5784 11.9028 12.4051C14.0746 10.2317 16.6322 8.51019 19.5757 7.24064C22.5192 5.97108 25.6609 5.3363 29.0007 5.3363C32.3405 5.3363 35.4822 5.97108 38.4257 7.24064C41.3692 8.51019 43.9268 10.2317 46.0986 12.4051C48.2704 14.5784 49.9927 17.1361 51.2655 20.078C52.5382 23.0199 53.1722 26.1615 53.1674 29.503C53.1625 32.8444 52.5278 35.9861 51.263 38.928C49.9983 41.8699 48.2769 44.4275 46.0986 46.6009C43.9204 48.7743 41.3628 50.4965 38.4257 51.7677C35.4887 53.0389 32.347 53.6729 29.0007 53.6696Z" fill="#89A8BB"/>
                  </svg>
                  <p className="font-nunito text-[20px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] flex-1">
                    Hem konum olarak yakın hem de kafa olarak yakın arkadaşlar edinmek istiyorsan..
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/111c71f2b421814b514ab811f3a5e2fae1b29524?width=116" 
                    alt="Magnet icon"
                    className="w-[58px] h-[58px] flex-shrink-0"
                  />
                  <p className="font-nunito text-[20px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] flex-1">
                    Yapmak istediğin hobiler için yanına eğlenebileceğin eşlikçiler arıyorsan..
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full">
                  <svg className="w-[58px] h-[58px] flex-shrink-0" viewBox="0 0 58 59" fill="none">
                    <path d="M38.5993 41.4903V46.2903H4.99933V41.4903C4.99933 41.4903 4.99933 31.8903 21.7993 31.8903C38.5993 31.8903 38.5993 41.4903 38.5993 41.4903ZM30.1993 18.6902C30.1993 17.0289 29.7067 15.4048 28.7837 14.0235C27.8607 12.6421 26.5488 11.5654 25.0139 10.9297C23.479 10.2939 21.79 10.1275 20.1606 10.4517C18.5311 10.7758 17.0344 11.5758 15.8596 12.7506C14.6849 13.9253 13.8848 15.4221 13.5607 17.0515C13.2366 18.6809 13.403 20.3699 14.0387 21.9048C14.6745 23.4397 15.7512 24.7516 17.1325 25.6746C18.5139 26.5976 20.138 27.0903 21.7993 27.0903C24.0271 27.0903 26.1637 26.2053 27.739 24.6299C29.3143 23.0546 30.1993 20.9181 30.1993 18.6902ZM38.4553 31.8903C39.9307 33.032 41.138 34.4833 41.9921 36.1419C42.8463 37.8004 43.3266 39.6261 43.3993 41.4903V46.2903H52.9993V41.4903C52.9993 41.4903 52.9993 32.7783 38.4553 31.8903ZM36.1993 10.2902C34.5476 10.2826 32.9324 10.7763 31.5673 11.7062C33.0252 13.7432 33.8091 16.1853 33.8091 18.6902C33.8091 21.1952 33.0252 23.6373 31.5673 25.6742C32.9324 26.6042 34.5476 27.0979 36.1993 27.0903C38.4271 27.0903 40.5637 26.2053 42.139 24.6299C43.7143 23.0546 44.5993 20.9181 44.5993 18.6902C44.5993 16.4624 43.7143 14.3259 42.139 12.7506C40.5637 11.1752 38.4271 10.2902 36.1993 10.2902Z" fill="#89A8BB"/>
                  </svg>
                  <p className="font-nunito text-[20px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] flex-1">
                    Sanal dünyadan, sanal arkadaşlıklardan ve sanal hikayelerden sıkıldıysan...
                  </p>
                </div>
              </div>

              <div className="w-full">
                <p className="font-afacad text-[28px] md:text-[36px] font-bold text-[#252525] tracking-[-0.54px]">
                  ordaburda, tam sana göre!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full max-w-[1320px] px-4">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-10 w-full max-w-[420px]">
            {/* Smart Tracking System */}
            <div className="flex flex-col items-start gap-2.5 w-full h-[350px] p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
              <div className="flex flex-col justify-end items-start gap-5 w-full h-full">
                <div className="flex items-start gap-5">
                  <svg className="w-[38px] h-[38px] flex-shrink-0" viewBox="0 0 38 38" fill="none">
                    <path d="M13.2609 25.7311L21.2567 23.4352C21.7845 23.2769 22.2399 23.0062 22.6231 22.623C23.0063 22.2398 23.2765 21.7849 23.4338 21.2582L25.7296 13.2623C25.8088 12.9721 25.7365 12.7145 25.5127 12.4897C25.2889 12.2648 25.0314 12.1925 24.74 12.2727L16.7442 14.5686C16.2164 14.7269 15.7615 14.9977 15.3794 15.3808C14.9973 15.764 14.7265 16.2189 14.5671 16.7457L12.2713 24.7415C12.1921 25.0318 12.2649 25.2893 12.4898 25.5142C12.7146 25.739 12.9716 25.8113 13.2609 25.7311ZM19.0004 21.3769C18.3407 21.3769 17.7802 21.1463 17.3189 20.685C16.8577 20.2237 16.6265 19.6627 16.6254 19.0019C16.6244 18.3411 16.8556 17.7806 17.3189 17.3204C17.7823 16.8602 18.3428 16.629 19.0004 16.6269C19.6581 16.6248 20.2191 16.856 20.6835 17.3204C21.148 17.7849 21.3786 18.3454 21.3754 19.0019C21.3723 19.6585 21.1416 20.2195 20.6835 20.685C20.2254 21.1505 19.6644 21.3811 19.0004 21.3769ZM19.0004 34.8352C16.8102 34.8352 14.7518 34.4194 12.8254 33.5876C10.8991 32.7558 9.22337 31.6279 7.79837 30.204C6.37337 28.7801 5.24551 27.1044 4.41478 25.1769C3.58406 23.2495 3.16817 21.1911 3.16712 19.0019C3.16606 16.8127 3.58195 14.7544 4.41478 12.8269C5.24762 10.8995 6.37548 9.22377 7.79837 7.79983C9.22125 6.37588 10.8969 5.24802 12.8254 4.41625C14.7539 3.58447 16.8123 3.16858 19.0004 3.16858C21.1886 3.16858 23.2469 3.58447 25.1754 4.41625C27.1039 5.24802 28.7796 6.37588 30.2025 7.79983C31.6254 9.22377 32.7538 10.8995 33.5877 12.8269C34.4216 14.7544 34.8369 16.8127 34.8338 19.0019C34.8306 21.1911 34.4147 23.2495 33.5861 25.1769C32.7575 27.1044 31.6296 28.7801 30.2025 30.204C28.7754 31.6279 27.0997 32.7563 25.1754 33.5892C23.2512 34.422 21.1928 34.8374 19.0004 34.8352Z" fill="#252525"/>
                  </svg>
                  <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                    Akıllı Takip Sistemi
                  </h4>
                </div>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
                  Favori etkinlik organizatörlerinizi ve ilginizi çeken toplulukları takip edin. Beğendiğiniz ve güvendi��iniz kişilerden gelen yeni etkinlik duyurularından anında haberdar olun.
                </p>
              </div>
            </div>

            {/* Smart Event Discovery */}
            <div className="flex flex-col items-center gap-2.5 w-full p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                <div className="flex items-start gap-3 w-full">
                  <svg className="w-[38px] h-[38px] flex-shrink-0" viewBox="0 0 38 38" fill="none">
                    <path d="M13.2609 25.731L21.2567 23.4351C21.7845 23.2768 22.2399 23.006 22.6231 22.6229C23.0063 22.2397 23.2765 21.7848 23.4338 21.258L25.7296 13.2622C25.8088 12.9719 25.7365 12.7144 25.5127 12.4895C25.2889 12.2647 25.0314 12.1924 24.74 12.2726L16.7442 14.5685C16.2164 14.7268 15.7615 14.9975 15.3794 15.3807C14.9973 15.7639 14.7265 16.2188 14.5671 16.7455L12.2713 24.7414C12.1921 25.0317 12.2649 25.2892 12.4898 25.514C12.7146 25.7389 12.9716 25.8112 13.2609 25.731ZM19.0004 21.3768C18.3407 21.3768 17.7802 21.1462 17.3189 20.6849C16.8577 20.2236 16.6265 19.6626 16.6254 19.0018C16.6244 18.341 16.8556 17.7805 17.3189 17.3203C17.7823 16.8601 18.3428 16.6289 19.0004 16.6268C19.6581 16.6247 20.2191 16.8558 20.6835 17.3203C21.148 17.7847 21.3786 18.3452 21.3754 19.0018C21.3723 19.6583 21.1416 20.2194 20.6835 20.6849C20.2254 21.1504 19.6644 21.381 19.0004 21.3768ZM19.0004 34.8351C16.8102 34.8351 14.7518 34.4192 12.8254 33.5875C10.8991 32.7557 9.22337 31.6278 7.79837 30.2039C6.37337 28.7799 5.24551 27.1042 4.41478 25.1768C3.58406 23.2493 3.16817 21.191 3.16712 19.0018C3.16606 16.8126 3.58195 14.7542 4.41478 12.8268C5.24762 10.8993 6.37548 9.22365 7.79837 7.79971C9.22125 6.37576 10.8969 5.2479 12.8254 4.41612C14.7539 3.58435 16.8123 3.16846 19.0004 3.16846C21.1886 3.16846 23.2469 3.58435 25.1754 4.41612C27.1039 5.2479 28.7796 6.37576 30.2025 7.79971C31.6254 9.22365 32.7538 10.8993 33.5877 12.8268C34.4216 14.7542 34.8369 16.8126 34.8338 19.0018C34.8306 21.191 34.4147 23.2493 33.5861 25.1768C32.7575 27.1042 31.6296 28.7799 30.2025 30.2039C28.7754 31.6278 27.0997 32.7562 25.1754 33.589C23.2512 34.4219 21.1928 34.8372 19.0004 34.8351Z" fill="#252525"/>
                  </svg>
                  <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px] flex-1">
                    Akıllı Etkinlik Keşfi
                  </h4>
                </div>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal h-[240px]">
                  Gelişmiş filtreleme sistemi ile ilgi alanlarınıza en uygun etkinlikleri kolayca bulun. Çevrenizde yeni deneyimler keşfedin veya dünyanın her yerinden online etkinliklere katılın.
                </p>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a4719cdf85c22ee608fddbc5ffd9ce722e0d011a?width=568" 
                  alt="Event discovery mockup"
                  className="w-[284px] h-[551px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-10 w-full max-w-[420px]">
            {/* Flexible Location Sharing */}
            <div className="flex flex-col items-start gap-2.5 w-full h-[350px] p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
              <div className="flex flex-col justify-end items-start gap-5 w-full h-full">
                <div className="flex items-start gap-5">
                  <svg className="w-[38px] h-[38px] flex-shrink-0" viewBox="0 0 38 38" fill="none">
                    <path d="M13.2609 25.7311L21.2567 23.4352C21.7845 23.2769 22.2399 23.0062 22.6231 22.623C23.0063 22.2398 23.2765 21.7849 23.4338 21.2582L25.7296 13.2623C25.8088 12.9721 25.7365 12.7145 25.5127 12.4897C25.2889 12.2648 25.0314 12.1925 24.74 12.2727L16.7442 14.5686C16.2164 14.7269 15.7615 14.9977 15.3794 15.3808C14.9973 15.764 14.7265 16.2189 14.5671 16.7457L12.2713 24.7415C12.1921 25.0318 12.2649 25.2893 12.4898 25.5142C12.7146 25.739 12.9716 25.8113 13.2609 25.7311ZM19.0004 21.3769C18.3407 21.3769 17.7802 21.1463 17.3189 20.685C16.8577 20.2237 16.6265 19.6627 16.6254 19.0019C16.6244 18.3411 16.8556 17.7806 17.3189 17.3204C17.7823 16.8602 18.3428 16.629 19.0004 16.6269C19.6581 16.6248 20.2191 16.856 20.6835 17.3204C21.148 17.7849 21.3786 18.3454 21.3754 19.0019C21.3723 19.6585 21.1416 20.2195 20.6835 20.685C20.2254 21.1505 19.6644 21.3811 19.0004 21.3769ZM19.0004 34.8352C16.8102 34.8352 14.7518 34.4194 12.8254 33.5876C10.8991 32.7558 9.22337 31.6279 7.79837 30.204C6.37337 28.7801 5.24551 27.1044 4.41478 25.1769C3.58406 23.2495 3.16817 21.1911 3.16712 19.0019C3.16606 16.8127 3.58195 14.7544 4.41478 12.8269C5.24762 10.8995 6.37548 9.22377 7.79837 7.79983C9.22125 6.37588 10.8969 5.24802 12.8254 4.41625C14.7539 3.58447 16.8123 3.16858 19.0004 3.16858C21.1886 3.16858 23.2469 3.58447 25.1754 4.41625C27.1039 5.24802 28.7796 6.37588 30.2025 7.79983C31.6254 9.22377 32.7538 10.8995 33.5877 12.8269C34.4216 14.7544 34.8369 16.8127 34.8338 19.0019C34.8306 21.1911 34.4147 23.2495 33.5861 25.1769C32.7575 27.1044 31.6296 28.7801 30.2025 30.204C28.7754 31.6279 27.0997 32.7563 25.1754 33.5892C23.2512 34.422 21.1928 34.8374 19.0004 34.8352Z" fill="#252525"/>
                  </svg>
                  <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                    Esnek Konum Paylaşımı
                  </h4>
                </div>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
                  Gizliliğiniz için tam adres veya genel bölge arasından seçim yapın. Entegre harita desteği ile hem fiziksel mekanlar hem de online etkinlikler için mükemmel çözüm.
                </p>
              </div>
            </div>

            {/* Easy Event Creation */}
            <div className="flex flex-col items-center gap-2.5 w-full p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                <div className="flex items-start gap-3 w-full">
                  <svg className="w-[38px] h-[38px] flex-shrink-0" viewBox="0 0 38 38" fill="none">
                    <path d="M13.2609 25.731L21.2567 23.4351C21.7845 23.2768 22.2399 23.006 22.6231 22.6229C23.0063 22.2397 23.2765 21.7848 23.4338 21.258L25.7296 13.2622C25.8088 12.9719 25.7365 12.7144 25.5127 12.4895C25.2889 12.2647 25.0314 12.1924 24.74 12.2726L16.7442 14.5685C16.2164 14.7268 15.7615 14.9975 15.3794 15.3807C14.9973 15.7639 14.7265 16.2188 14.5671 16.7455L12.2713 24.7414C12.1921 25.0317 12.2649 25.2892 12.4898 25.514C12.7146 25.7389 12.9716 25.8112 13.2609 25.731ZM19.0004 21.3768C18.3407 21.3768 17.7802 21.1462 17.3189 20.6849C16.8577 20.2236 16.6265 19.6626 16.6254 19.0018C16.6244 18.341 16.8556 17.7805 17.3189 17.3203C17.7823 16.8601 18.3428 16.6289 19.0004 16.6268C19.6581 16.6247 20.2191 16.8558 20.6835 17.3203C21.148 17.7847 21.3786 18.3452 21.3754 19.0018C21.3723 19.6583 21.1416 20.2194 20.6835 20.6849C20.2254 21.1504 19.6644 21.381 19.0004 21.3768ZM19.0004 34.8351C16.8102 34.8351 14.7518 34.4192 12.8254 33.5875C10.8991 32.7557 9.22337 31.6278 7.79837 30.2039C6.37337 28.7799 5.24551 27.1042 4.41478 25.1768C3.58406 23.2493 3.16817 21.191 3.16712 19.0018C3.16606 16.8126 3.58195 14.7542 4.41478 12.8268C5.24762 10.8993 6.37548 9.22365 7.79837 7.79971C9.22125 6.37576 10.8969 5.2479 12.8254 4.41612C14.7539 3.58435 16.8123 3.16846 19.0004 3.16846C21.1886 3.16846 23.2469 3.58435 25.1754 4.41612C27.1039 5.2479 28.7796 6.37576 30.2025 7.79971C31.6254 9.22365 32.7538 10.8993 33.5877 12.8268C34.4216 14.7542 34.8369 16.8126 34.8338 19.0018C34.8306 21.191 34.4147 23.2493 33.5861 25.1768C32.7575 27.1042 31.6296 28.7799 30.2025 30.2039C28.7754 31.6278 27.0997 32.7562 25.1754 33.589C23.2512 34.4219 21.1928 34.8372 19.0004 34.8351Z" fill="#252525"/>
                  </svg>
                  <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                    Kolay Etkinlik Oluşturma
                  </h4>
                </div>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal h-[240px]">
                  Küçük dostluk buluşmalarından büyük organizasyonlara kadar her türlü etkinliği kolayca oluşturun. Katılımcı kapasitesi belirleyin, onay süreçlerini yönetin ve etkinlik detaylarını zahmetsizce paylaşın.
                </p>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/81e6bc94a6c807d9e750658a17ad7f9651ca2f14?width=568" 
                  alt="Event creation mockup"
                  className="w-[284px] h-[557px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-10 w-full max-w-[420px]">
            {/* Rating System */}
            <div className="flex flex-col items-start gap-2.5 w-full h-[350px] p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
              <div className="flex flex-col justify-end items-start gap-5 w-full h-full">
                <div className="flex items-start gap-5">
                  <svg className="w-[38px] h-[38px] flex-shrink-0" viewBox="0 0 38 38" fill="none">
                    <path d="M13.2609 25.7311L21.2567 23.4352C21.7845 23.2769 22.2399 23.0062 22.6231 22.623C23.0063 22.2398 23.2765 21.7849 23.4338 21.2582L25.7296 13.2623C25.8088 12.9721 25.7365 12.7145 25.5127 12.4897C25.2889 12.2648 25.0314 12.1925 24.74 12.2727L16.7442 14.5686C16.2164 14.7269 15.7615 14.9977 15.3794 15.3808C14.9973 15.764 14.7265 16.2189 14.5671 16.7457L12.2713 24.7415C12.1921 25.0318 12.2649 25.2893 12.4898 25.5142C12.7146 25.739 12.9716 25.8113 13.2609 25.7311ZM19.0004 21.3769C18.3407 21.3769 17.7802 21.1463 17.3189 20.685C16.8577 20.2237 16.6265 19.6627 16.6254 19.0019C16.6244 18.3411 16.8556 17.7806 17.3189 17.3204C17.7823 16.8602 18.3428 16.629 19.0004 16.6269C19.6581 16.6248 20.2191 16.856 20.6835 17.3204C21.148 17.7849 21.3786 18.3454 21.3754 19.0019C21.3723 19.6585 21.1416 20.2195 20.6835 20.685C20.2254 21.1505 19.6644 21.3811 19.0004 21.3769ZM19.0004 34.8352C16.8102 34.8352 14.7518 34.4194 12.8254 33.5876C10.8991 32.7558 9.22337 31.6279 7.79837 30.204C6.37337 28.7801 5.24551 27.1044 4.41478 25.1769C3.58406 23.2495 3.16817 21.1911 3.16712 19.0019C3.16606 16.8127 3.58195 14.7544 4.41478 12.8269C5.24762 10.8995 6.37548 9.22377 7.79837 7.79983C9.22125 6.37588 10.8969 5.24802 12.8254 4.41625C14.7539 3.58447 16.8123 3.16858 19.0004 3.16858C21.1886 3.16858 23.2469 3.58447 25.1754 4.41625C27.1039 5.24802 28.7796 6.37588 30.2025 7.79983C31.6254 9.22377 32.7538 10.8995 33.5877 12.8269C34.4216 14.7544 34.8369 16.8127 34.8338 19.0019C34.8306 21.1911 34.4147 23.2495 33.5861 25.1769C32.7575 27.1044 31.6296 28.7801 30.2025 30.204C28.7754 31.6279 27.0997 32.7563 25.1754 33.5892C23.2512 34.422 21.1928 34.8374 19.0004 34.8352Z" fill="#252525"/>
                  </svg>
                  <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                    Değerlendirme Sistemi
                  </h4>
                </div>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
                  Katıldığınız etkinlikleri değerlendirerek deneyimlerinizi toplulukla paylaşın. En iyi etkinlikleri ve güvenilir organizatörleri keşfetmek için topluluk puanlamalarından faydalanın.
                </p>
              </div>
            </div>

            {/* Event Chat Rooms */}
            <div className="flex flex-col items-center gap-2.5 w-full p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                <div className="flex items-start gap-3 w-full">
                  <svg className="w-[38px] h-[38px] flex-shrink-0" viewBox="0 0 38 38" fill="none">
                    <path d="M13.2609 25.731L21.2567 23.4351C21.7845 23.2768 22.2399 23.006 22.6231 22.6229C23.0063 22.2397 23.2765 21.7848 23.4338 21.258L25.7296 13.2622C25.8088 12.9719 25.7365 12.7144 25.5127 12.4895C25.2889 12.2647 25.0314 12.1924 24.74 12.2726L16.7442 14.5685C16.2164 14.7268 15.7615 14.9975 15.3794 15.3807C14.9973 15.7639 14.7265 16.2188 14.5671 16.7455L12.2713 24.7414C12.1921 25.0317 12.2649 25.2892 12.4898 25.514C12.7146 25.7389 12.9716 25.8112 13.2609 25.731ZM19.0004 21.3768C18.3407 21.3768 17.7802 21.1462 17.3189 20.6849C16.8577 20.2236 16.6265 19.6626 16.6254 19.0018C16.6244 18.341 16.8556 17.7805 17.3189 17.3203C17.7823 16.8601 18.3428 16.6289 19.0004 16.6268C19.6581 16.6247 20.2191 16.8558 20.6835 17.3203C21.148 17.7847 21.3786 18.3452 21.3754 19.0018C21.3723 19.6583 21.1416 20.2194 20.6835 20.6849C20.2254 21.1504 19.6644 21.381 19.0004 21.3768ZM19.0004 34.8351C16.8102 34.8351 14.7518 34.4192 12.8254 33.5875C10.8991 32.7557 9.22337 31.6278 7.79837 30.2039C6.37337 28.7799 5.24551 27.1042 4.41478 25.1768C3.58406 23.2493 3.16817 21.191 3.16712 19.0018C3.16606 16.8126 3.58195 14.7542 4.41478 12.8268C5.24762 10.8993 6.37548 9.22365 7.79837 7.79971C9.22125 6.37576 10.8969 5.2479 12.8254 4.41612C14.7539 3.58435 16.8123 3.16846 19.0004 3.16846C21.1886 3.16846 23.2469 3.58435 25.1754 4.41612C27.1039 5.2479 28.7796 6.37576 30.2025 7.79971C31.6254 9.22365 32.7538 10.8993 33.5877 12.8268C34.4216 14.7542 34.8369 16.8126 34.8338 19.0018C34.8306 21.191 34.4147 23.2493 33.5861 25.1768C32.7575 27.1042 31.6296 28.7799 30.2025 30.2039C28.7754 31.6278 27.0997 32.7562 25.1754 33.589C23.2512 34.4219 21.1928 34.8372 19.0004 34.8351Z" fill="#252525"/>
                  </svg>
                  <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                    Etkinlik Sohbet Odaları
                  </h4>
                </div>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal h-[240px]">
                  Her etkinlik için özel sohbet odaları ile diğer katılımcılarla bağlantı kurun. Etkinlik öncesi, sırası ve sonrasında anlık mesajlaşma ile yeni arkadaşlıklar geliştirin.
                </p>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/286d530d3a8a73d649b24d83f0b118836e4c680c?width=574" 
                  alt="Chat rooms mockup"
                  className="w-[287px] h-[557px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cooking Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[35px] w-full max-w-[1320px] px-[60px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/008abffac81e87c797fae421ec5caf22feb5bbb0?width=880" 
            alt="Cooking illustration"
            className="w-full max-w-[440px] h-[440px] object-contain"
          />
          <div className="flex flex-col justify-center items-start gap-[35px] flex-1">
            <h3 className="font-afacad text-[28px] md:text-[36px] font-bold text-black tracking-[-0.54px] leading-normal">
              Evde dünya mutfağından farklı lezzetler pişirmek istiyorsun ama eşlik edecek kimsen yok mu?
            </h3>
            <p className="font-nunito text-[20px] md:text-[28px] font-bold text-black tracking-[-0.14px] leading-normal">
              Belki mahallende farklılıklara açık ve yemek sever biri vardır? Birbirinizin dünyasına tad katmak için tek gereken bir mesaj!
            </p>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="w-full bg-gradient-to-r from-[#F1F1F1] to-[#FAFAFA]">
          <div className="flex flex-col justify-center items-center gap-[35px] w-full max-w-[1320px] mx-auto py-[35px] px-[60px]">
            <h3 className="font-afacad text-[28px] md:text-[36px] font-bold text-[#252525] tracking-[-0.54px] text-center">
              Hızlı Gelecek, Güçlü Gelecek
            </h3>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2.5 w-full">
              {/* Phase 1 */}
              <div className="flex flex-col items-start gap-3 flex-1">
                <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                  Pilot Başlangıç
                </h4>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
                  Pilot bir şehirde platformu hayata geçirme ve ilk kullanıcı topluluğunu oluşturma
                </p>
              </div>

              {/* Arrow 1 */}
              <svg className="w-[78px] h-[78px] flex-shrink-0 hidden lg:block" viewBox="0 0 79 79" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.1045 15.8719C28.6672 14.3131 31.1971 14.3147 32.7578 15.8754L53.1045 36.2221C54.6666 37.7842 54.6666 40.3169 53.1045 41.879L32.7578 62.2256C31.1971 63.7864 28.6672 63.7879 27.1045 62.2292L26.2533 61.3801C24.6874 59.8182 24.6864 57.2819 26.251 55.7186L40.1009 41.8801C41.6646 40.3178 41.6646 37.7833 40.1009 36.2209L26.251 22.3825C24.6864 20.8192 24.6874 18.2829 26.2533 16.7209L27.1045 15.8719Z" fill="url(#paint0_linear_80_1431)"/>
                <defs>
                  <linearGradient id="paint0_linear_80_1431" x1="65.7256" y1="38.9998" x2="15.5" y2="38.9998" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#252525"/>
                    <stop offset="1" stopColor="#252525" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Phase 2 */}
              <div className="flex flex-col items-start gap-3 flex-1">
                <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                  Geliştirme & Genişleme
                </h4>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
                  Geri bildirimlerle ürünü geliştirme, premium üyelik modelini başlatma ve yeni şehirlere açılma
                </p>
              </div>

              {/* Arrow 2 */}
              <svg className="w-[78px] h-[78px] flex-shrink-0 hidden lg:block" viewBox="0 0 79 79" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.7712 15.8719C28.3339 14.3131 30.8638 14.3147 32.4245 15.8754L52.7712 36.2221C54.3333 37.7842 54.3333 40.3169 52.7712 41.879L32.4245 62.2256C30.8638 63.7864 28.3339 63.7879 26.7712 62.2292L25.92 61.3801C24.3542 59.8182 24.3531 57.2819 25.9177 55.7186L39.7677 41.8801C41.3313 40.3178 41.3313 37.7833 39.7677 36.2209L25.9177 22.3825C24.3531 20.8192 24.3542 18.2829 25.92 16.7209L26.7712 15.8719Z" fill="url(#paint0_linear_80_1436)"/>
                <defs>
                  <linearGradient id="paint0_linear_80_1436" x1="65.3923" y1="38.9998" x2="15.1667" y2="38.9998" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#252525"/>
                    <stop offset="1" stopColor="#252525" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Phase 3 */}
              <div className="flex flex-col items-start gap-3 flex-1">
                <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
                  Ülke Geneli Yayılım
                </h4>
                <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
                  Ülke geneline yayılma, bilet satış entegrasyonlarını ve işletmelere yönelik araçları devreye alma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full">
          <div 
            className="flex flex-col items-center gap-[70px] w-full px-[50px] py-[50px] pb-[120px]"
            style={{
              background: 'radial-gradient(40.22% 95.73% at 50% 129.74%, #FD6E60 12.5%, #FFB64C 40%, rgba(255, 182, 76, 0.50) 45%, rgba(144, 213, 255, 0.50) 100%)'
            }}
          >
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="font-afacad text-[40px] md:text-[64px] font-bold text-[#252525] text-center tracking-[-1.28px] w-full">
                Aramıza Katıl, Sosyalliğin Keyfini Çıkar!
              </h2>
              <p className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] text-center tracking-[-0.14px] w-full">
                Sadece etkinlik değil, yeni insanlarla yeni anılar biriktir
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-[35px] w-full max-w-[666px]">
              <div className="flex flex-col items-start gap-5 w-full">
                <input
                  type="text"
                  placeholder="Adınız"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 border border-[#D9D9D9] rounded-lg bg-[#FAFAFA] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] font-nunito text-[18px] md:text-[24px] text-[#252525] placeholder:text-[#D9D9D9] placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#568099]"
                />
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border border-[#D9D9D9] rounded-lg bg-[#FAFAFA] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] font-nunito text-[18px] md:text-[24px] text-[#252525] placeholder:text-[#D9D9D9] placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#568099]"
                />
              </div>
              <button
                type="submit"
                className="w-full h-[53px] px-5 py-2 bg-[#90D5FF] border border-[#568099] rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.12px] hover:bg-[#7AC8F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#568099]"
              >
                BAŞVUR
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-[#FAFAFA] px-[60px] py-[30px] gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <h1 className="font-afacad text-[48px] md:text-[64px] font-bold text-[#252525] tracking-[-1.28px]">
              ordaburda
            </h1>
            <p className="font-afacad text-[16px] md:text-[20px] font-bold text-[#252525] tracking-[-0.3px]">
              anı yaşa, hayatı keşfet
            </p>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-5">
            <a 
              href="mailto:admin@ordaburda.com" 
              className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px] underline hover:text-[#568099] transition-colors"
            >
              admin@ordaburda.com
            </a>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <svg className="w-[50px] h-[50px]" viewBox="0 0 51 51" fill="none">
                  <path d="M40.5357 6.35059C41.6408 6.35059 42.7006 6.78957 43.482 7.57097C44.2634 8.35238 44.7024 9.41218 44.7024 10.5173V39.6839C44.7024 40.789 44.2634 41.8488 43.482 42.6302C42.7006 43.4116 41.6408 43.8506 40.5357 43.8506H11.3691C10.264 43.8506 9.20418 43.4116 8.42278 42.6302C7.64138 41.8488 7.20239 40.789 7.20239 39.6839V10.5173C7.20239 9.41218 7.64138 8.35238 8.42278 7.57097C9.20418 6.78957 10.264 6.35059 11.3691 6.35059H40.5357ZM39.4941 38.6423V27.6006C39.4941 25.7993 38.7785 24.0718 37.5048 22.7982C36.2311 21.5245 34.5037 20.8089 32.7024 20.8089C30.9316 20.8089 28.8691 21.8923 27.8691 23.5173V21.2048H22.0566V38.6423H27.8691V28.3714C27.8691 26.7673 29.1607 25.4548 30.7649 25.4548C31.5384 25.4548 32.2803 25.762 32.8273 26.309C33.3743 26.856 33.6816 27.5979 33.6816 28.3714V38.6423H39.4941ZM15.2857 17.9339C16.214 17.9339 17.1042 17.5652 17.7606 16.9088C18.417 16.2524 18.7857 15.3622 18.7857 14.4339C18.7857 12.4964 17.2232 10.9131 15.2857 10.9131C14.3519 10.9131 13.4564 11.284 12.7961 11.9443C12.1358 12.6046 11.7649 13.5001 11.7649 14.4339C11.7649 16.3714 13.3482 17.9339 15.2857 17.9339ZM18.1816 38.6423V21.2048H12.4107V38.6423H18.1816Z" fill="#252525"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <svg className="w-[50px] h-[50px]" viewBox="0 0 50 51" fill="none">
                  <path d="M16.25 4.26709H33.75C40.4166 4.26709 45.8333 9.68376 45.8333 16.3504V33.8504C45.8333 37.0551 44.5602 40.1286 42.2942 42.3946C40.0281 44.6607 36.9547 45.9338 33.75 45.9338H16.25C9.58329 45.9338 4.16663 40.5171 4.16663 33.8504V16.3504C4.16663 13.1457 5.43969 10.0723 7.70575 7.80622C9.97182 5.54015 13.0453 4.26709 16.25 4.26709ZM15.8333 8.43376C13.8442 8.43376 11.9365 9.22393 10.53 10.6305C9.12347 12.037 8.33329 13.9446 8.33329 15.9338V34.2671C8.33329 38.4129 11.6875 41.7671 15.8333 41.7671H34.1666C36.1558 41.7671 38.0634 40.9769 39.4699 39.5704C40.8765 38.1639 41.6666 36.2562 41.6666 34.2671V15.9338C41.6666 11.7879 38.3125 8.43376 34.1666 8.43376H15.8333ZM35.9375 11.5588C36.6281 11.5588 37.2905 11.8331 37.7789 12.3215C38.2673 12.8099 38.5416 13.4723 38.5416 14.1629C38.5416 14.8536 38.2673 15.516 37.7789 16.0043C37.2905 16.4927 36.6281 16.7671 35.9375 16.7671C35.2468 16.7671 34.5844 16.4927 34.096 16.0043C33.6077 15.516 33.3333 14.8536 33.3333 14.1629C33.3333 13.4723 33.6077 12.8099 34.096 12.3215C34.5844 11.8331 35.2468 11.5588 35.9375 11.5588ZM25 14.6838C27.7626 14.6838 30.4122 15.7812 32.3657 17.7347C34.3192 19.6882 35.4166 22.3378 35.4166 25.1004C35.4166 27.8631 34.3192 30.5126 32.3657 32.4661C30.4122 34.4196 27.7626 35.5171 25 35.5171C22.2373 35.5171 19.5878 34.4196 17.6343 32.4661C15.6808 30.5126 14.5833 27.8631 14.5833 25.1004C14.5833 22.3378 15.6808 19.6882 17.6343 17.7347C19.5878 15.7812 22.2373 14.6838 25 14.6838ZM25 18.8504C23.3424 18.8504 21.7526 19.5089 20.5805 20.681C19.4084 21.8531 18.75 23.4428 18.75 25.1004C18.75 26.758 19.4084 28.3477 20.5805 29.5198C21.7526 30.6919 23.3424 31.3504 25 31.3504C26.6576 31.3504 28.2473 30.6919 29.4194 29.5198C30.5915 28.3477 31.25 26.758 31.25 25.1004C31.25 23.4428 30.5915 21.8531 29.4194 20.681C28.2473 19.5089 26.6576 18.8504 25 18.8504Z" fill="#252525"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
