import Quote from "./Quote";
import HeroImage from "/hero.png";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 py-8 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content Container */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 flex-1 max-w-2xl">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-3 lg:gap-4">
            <h1 className="font-afacad text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[178px] font-bold text-[#252525] leading-[0.75] tracking-[-0.02em]">
              ordaburda
            </h1>
            <p className="font-afacad text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#252525] tracking-[-0.015em]">
              anı yaşa, hayatı keşfet
            </p>
          </div>

          {/* Description */}
          <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-[#252525] tracking-[-0.005em] leading-relaxed">
            Çevrenizdeki heyecan verici etkinlikleri keşfedin, yeni arkadaşlar
            edinin ve unutulmaz anılar yaratın. İlgi alanlarınızı paylaşan
            topluluklara katılın ve ortak deneyimler aracılığı ile anlamlı
            bağlantılar kurun.
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center items-center w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/eae47b2679641d5ddb07ba2f0246bd72c0c71ed2?width=668"
            alt="ordaburda mobile app preview"
            className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain"
          />
        </div>
      </div>

      <div className="mt-8 lg:mt-12 w-full flex justify-center">
        <Quote />
      </div>
    </section>
  );
};

export default Hero;
