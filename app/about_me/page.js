export default function AboutMe() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#8B4513] font-['Noto Serif TC']">關於本店</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
        <p className="text-gray-600 mb-4 font-['Noto Serif TC']">
          永盛醬園創立於1952年，是一家專注於傳統醬料製作的老字號店家。我們堅持使用古法製作各式醬料，從原料的挑選到製作過程都一絲不苟，務求為顧客提供最道地的傳統美味。
        </p>
        <p className="text-gray-600 mb-4 font-['Noto Serif TC']">
          本網站建立的目的是為了讓更多人認識我們的產品和品牌理念。在這裡，您可以了解到我們的製作工藝、產品特色，以及我們對傳統美食文化的堅持與傳承。
        </p>
        <p className="text-gray-600 font-['Noto Serif TC']">
          我們相信，好的醬料能為美食加分，更能傳承台灣的飲食文化。歡迎您親臨本店，體驗傳統醬料的魅力。
        </p>
      </div>

      <div className="text-center">
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#654321] transition-colors duration-300 font-['Noto Serif TC']"
        >
          回到首頁
        </a>
      </div>
    </div>
    </>
  );
}
