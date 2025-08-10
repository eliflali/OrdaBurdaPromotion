import FoodIllustration from "/food-illustration.svg";

const Cooking = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 lg:px-8 min-h-screen bg-[#F1F1F1]">
      {/* Illustration */}
      <img
        src={FoodIllustration}
        alt="Cooking illustration"
        className="w-full max-w-[540px] h-auto object-contain"
      />

      {/* Right Content */}
      <div className="flex flex-col justify-center items-start gap-[35px] w-full max-w-[688px]">
        <h3 className="font-afacad text-[28px] md:text-[36px] font-bold text-[#252525] tracking-[-0.54px]">
          Evde dünya mutfağından farklı lezzetler pişirmek istiyorsun ama eşlik
          edecek kimsen yok mu?
        </h3>
        <p className="font-nunito text-[20px] md:text-[28px] font-bold text-[#252525] tracking-[-0.14px] leading-normal">
          Belki mahallende farklılıklara açık ve yemek sever biri vardır?
          Birbirinizin dünyasına tad katmak için tek gereken bir mesaj!
        </p>
      </div>
    </div>
  );
};

export default Cooking;
