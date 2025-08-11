import ArrowRight from "/arrow-right.svg";
import ArrowDown from "/arrow-down.svg";

const Roadmap = () => {
  return (
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
              Pilot bir şehirde platformu hayata geçirme ve ilk kullanıcı
              topluluğunu oluşturma
            </p>
          </div>

          {/* Arrow 1 */}
          <img
            src={ArrowRight}
            className="w-[78px] h-[78px] flex-shrink-0 hidden lg:block"
            alt="Right arrow"
          />
          <img
            src={ArrowDown}
            className="w-[78px] h-[78px] flex-shrink-0 lg:hidden"
            alt="Down arrow"
          />

          {/* Phase 2 */}
          <div className="flex flex-col items-start gap-3 flex-1">
            <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px]">
              Geliştirme & Genişleme
            </h4>
            <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
              Geri bildirimlerle ürünü geliştirme ve yeni şehirlere açılma
            </p>
          </div>

          {/* Arrow 2 */}
          <img
            src={ArrowRight}
            className="w-[78px] h-[78px] flex-shrink-0 hidden lg:block"
            alt="Right arrow"
          />
          <img
            src={ArrowDown}
            className="w-[78px] h-[78px] flex-shrink-0 lg:hidden"
            alt="Down arrow"
          />

          {/* Phase 3 */}
          <div className="flex flex-col items-start gap-3 flex-1">
            <h4 className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[0.24px] leading-normal">
              Ülke Geneli Yayılım
            </h4>
            <p className="font-nunito text-[18px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] leading-normal">
              Ülke geneline yayılma, bilet satış entegrasyonlarını ve
              işletmelere yönelik araçları devreye alma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
