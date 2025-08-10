import Material from "/material-black.svg";
const FeaturesGrid = () => {
  return (
    <div className="w-full pt-8 pb-8 max-w-[1320px] px-4 mx-auto">
      {/* Grid Container - 3x2 on large screens, 1x6 on small screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1: Smart Tracking System */}
        <div className="flex flex-col p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] h-full">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={Material}
              alt="Material"
              className="w-[38px] h-[38px] flex-shrink-0"
            />
            <h4 className="font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.14px] leading-tight">
              Akıllı Takip Sistemi
            </h4>
          </div>
          <p className="font-nunito text-[16px] md:text-[20px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
            Favori etkinlik organizatörlerinizi ve ilginizi çeken toplulukları
            takip edin. Beğendiğiniz ve güvendiğiniz kişilerden gelen yeni
            etkinlik duyurularından anında haberdar olun.
          </p>
        </div>

        {/* Card 2: Flexible Location Sharing */}
        <div className="flex flex-col p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] h-full">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={Material}
              alt="Material"
              className="w-[38px] h-[38px] flex-shrink-0"
            />
            <h4 className="font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.14px] leading-tight">
              Esnek Konum Paylaşımı
            </h4>
          </div>
          <p className="font-nunito text-[16px] md:text-[20px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
            Gizliliğiniz için tam adres veya genel bölge arasından seçim yapın.
            Entegre harita desteği ile hem fiziksel mekanlar hem de online
            etkinlikler için mükemmel çözüm.
          </p>
        </div>

        {/* Card 3: Rating System */}
        <div className="flex flex-col p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] h-full">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={Material}
              alt="Material"
              className="w-[38px] h-[38px] flex-shrink-0"
            />
            <h4 className="font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.14px] leading-tight">
              Değerlendirme Sistemi
            </h4>
          </div>
          <p className="font-nunito text-[16px] md:text-[20px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
            Katıldığınız etkinlikleri değerlendirerek deneyimlerinizi toplulukla
            paylaşın. En iyi etkinlikleri ve güvenilir organizatörleri keşfetmek
            için topluluk puanlamalarından faydalanın.
          </p>
        </div>

        {/* Card 4: Smart Event Discovery */}
        <div className="flex flex-col p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] h-full">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={Material}
              alt="Material"
              className="w-[38px] h-[38px] flex-shrink-0"
            />
            <h4 className="font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.14px] leading-tight">
              Akıllı Etkinlik Keşfi
            </h4>
          </div>
          <p className="font-nunito text-[16px] md:text-[20px] font-normal text-[#252525] tracking-[0.24px] leading-normal mb-6">
            Gelişmiş filtreleme sistemi ile ilgi alanlarınıza en uygun
            etkinlikleri kolayca bulun. Çevrenizde yeni deneyimler keşfedin veya
            dünyanın her yerinden online etkinliklere katılın.
          </p>
          <div className="flex justify-center mt-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a4719cdf85c22ee608fddbc5ffd9ce722e0d011a?width=568"
              alt="Event discovery mockup"
              className="w-[284px] h-[551px] object-contain"
            />
          </div>
        </div>

        {/* Card 5: Easy Event Creation */}
        <div className="flex flex-col p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] h-full">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={Material}
              alt="Material"
              className="w-[38px] h-[38px] flex-shrink-0"
            />
            <h4 className="font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.14px] leading-tight">
              Kolay Etkinlik Oluşturma
            </h4>
          </div>
          <p className="font-nunito text-[16px] md:text-[20px] font-normal text-[#252525] tracking-[0.24px] leading-normal mb-6">
            Küçük dostluk buluşmalarından büyük organizasyonlara kadar her türlü
            etkinliği kolayca oluşturun. Katılımcı kapasitesi belirleyin, onay
            süreçlerini yönetin ve etkinlik detaylarını zahmetsizce paylaşın.
          </p>
          <div className="flex justify-center mt-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/81e6bc94a6c807d9e750658a17ad7f9651ca2f14?width=568"
              alt="Event creation mockup"
              className="w-[284px] h-[557px] object-contain"
            />
          </div>
        </div>

        {/* Card 6: Event Chat Rooms */}
        <div className="flex flex-col p-6 rounded-2xl border border-[#8B8B8B] bg-[#F1F1F1] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] h-full">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={Material}
              alt="Material"
              className="w-[38px] h-[38px] flex-shrink-0"
            />
            <h4 className="font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.14px] leading-tight">
              Etkinlik Sohbet Odaları
            </h4>
          </div>
          <p className="font-nunito text-[16px] md:text-[20px] font-normal text-[#252525] tracking-[0.24px] leading-normal mb-6">
            Her etkinlik için özel sohbet odaları ile diğer katılımcılarla
            bağlantı kurun. Etkinlik öncesi, sırası ve sonrasında anlık
            mesajlaşma ile yeni arkadaşlıklar geliştirin.
          </p>
          <div className="flex justify-center mt-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/286d530d3a8a73d649b24d83f0b118836e4c680c?width=574"
              alt="Chat rooms mockup"
              className="w-[287px] h-[557px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
