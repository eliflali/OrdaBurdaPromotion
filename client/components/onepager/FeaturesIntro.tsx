import FeaturesIllustration from "/features-illustration.svg";
import Material from "/material-symbols_explore-rounded.svg";
import Users from "/mdi_users.svg";
import Magnet from "/magnet-circle-filled.svg";

const FeaturesIntro = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 lg:px-8 min-h-screen bg-[#F1F1F1]">
      {/* Illustration */}
      <img
        src={FeaturesIllustration}
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
            <img
              src={Material}
              alt="Material icon"
              className="w-[58px] h-[58px] flex-shrink-0"
            />
            <p className="font-nunito text-[20px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] flex-1">
              Hem konum olarak yakın hem de kafa olarak yakın arkadaşlar edinmek
              istiyorsan..
            </p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <img
              src={Magnet}
              alt="Magnet icon"
              className="w-[58px] h-[58px] flex-shrink-0"
            />
            <p className="font-nunito text-[20px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] flex-1">
              Yapmak istediğin hobiler için yanına eğlenebileceğin eşlikçiler
              arıyorsan..
            </p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <img
              src={Users}
              alt="Users icon"
              className="w-[58px] h-[58px] flex-shrink-0"
            />
            <p className="font-nunito text-[20px] md:text-[24px] font-normal text-[#252525] tracking-[0.24px] flex-1">
              Sanal dünyadan, sanal arkadaşlıklardan ve sanal hikayelerden
              sıkıldıysan...
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
  );
};

export default FeaturesIntro;
