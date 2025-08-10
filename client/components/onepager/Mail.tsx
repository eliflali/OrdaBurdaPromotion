import { useState } from "react";

const Mail = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Lütfen e-posta adresinizi girin");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/collect-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("E-posta adresiniz başarıyla kaydedildi! Teşekkürler.");
        setIsSuccess(true);
        setEmail("");
      } else {
        setMessage(data.message || "Bir hata oluştu. Lütfen tekrar deneyin.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div
        className="flex flex-col items-center gap-[70px] w-full px-[50px] py-[50px] pb-[120px]"
        style={{
          background:
            "radial-gradient(40.22% 95.73% at 50% 129.74%, #FD6E60 12.5%, #FFB64C 40%, rgba(255, 182, 76, 0.50) 45%, rgba(144, 213, 255, 0.50) 100%)",
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-[35px] w-full max-w-[666px]"
        >
          <div className="flex flex-col items-start gap-5 w-full">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full px-5 py-3 border border-[#D9D9D9] rounded-lg bg-[#FAFAFA] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] font-nunito text-[18px] md:text-[24px] text-[#252525] placeholder:text-[#D9D9D9] placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#568099] disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message display */}
          {message && (
            <div
              className={`w-full p-3 rounded-lg text-center font-nunito text-[16px] ${
                isSuccess
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-[53px] px-5 py-2 bg-[#90D5FF] border border-[#568099] rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] font-nunito text-[18px] md:text-[24px] font-bold text-[#252525] tracking-[-0.12px] hover:bg-[#7AC8F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#568099] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "GÖNDERİLİYOR..." : "BENİ HABERDAR ET"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
