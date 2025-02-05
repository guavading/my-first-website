export default function Home() {
  return (
    <>
    {/* 標題區塊 */}
    <section className="text-center py-16 bg-gradient-to-b from-[#FFF8DC] to-white">
      <h1 className="text-6xl font-bold mb-4 text-[#8B4513] font-['Noto Serif TC']">合家興</h1>
      <h2 className="text-2xl text-[#654321] font-['Noto Serif TC']">純手工製作</h2>
    </section>

    <section className="text-center py-12">
      <h2 className="text-4xl font-bold mb-8 text-[#8B4513] font-['Noto Serif TC']">推薦商品</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 第一張卡片 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow-lg overflow-hidden aspect-square w-full mb-4">
              <img
                src="/images/ph1.jpg"
                alt="傳統醬油"
                width="400"
                height="400"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#8B4513] font-['Noto Serif TC']">
              古法釀造醬油
            </h3>
            <p className="text-gray-600 font-['Noto Serif TC'] text-center">
              採用百年傳統工法，精選黑豆慢火熬製，醬香濃郁，口感層次豐富，為您的料理增添深層風味。
            </p>
          </div>

          {/* 第二張卡片 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow-lg overflow-hidden aspect-square w-full mb-4">
              <img
                src="/images/ph2.jpg"
                alt="豆瓣醬"
                width="400"
                height="400"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#8B4513] font-['Noto Serif TC']">
              特製豆瓣醬
            </h3>
            <p className="text-gray-600 font-['Noto Serif TC'] text-center">
              嚴選新鮮食材，搭配獨家配方，每一口都能品嚐到豆瓣的鮮美，是烹飪中不可或缺的靈魂調味料。
            </p>
          </div>

          {/* 第三張卡片 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow-lg overflow-hidden aspect-square w-full mb-4">
              <img
                src="/images/Y2 FIELD.png"
                alt="辣椒醬"
                width="400"
                height="400"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#8B4513] font-['Noto Serif TC']">
              手工辣椒醬
            </h3>
            <p className="text-gray-600 font-['Noto Serif TC'] text-center">
              精選台灣在地辣椒，純手工製作，保留最原始的辛香風味，讓您的餐點增添獨特的香辣層次。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#FFF8DC] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#8B4513] font-['Noto Serif TC']">
          關於我們
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/store-front.jpg" 
                  alt="店面外觀"
                  className="rounded-lg w-full h-auto"
                  width="500"
                  height="300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-[#8B4513] font-['Noto Serif TC']">
                  傳承三代的手藝
                </h3>
                <p className="text-gray-600 mb-4 font-['Noto Serif TC']">
                  源自1952年，我們秉持著對傳統醬製品的熱愛與堅持，用心製作每一項產品。從選料到醞釀，都遵循古法與現代工藝的完美結合，為您呈現最道地的台灣味。
                </p>
                <p className="text-gray-600 mb-4 font-['Noto Serif TC']">
                  位於台南府城老街，我們的店面承載著歷史的痕跡，每一磚一瓦都訴說著醬料製作的故事。我們堅持使用台灣在地食材，與在地小農合作，確保原料的新鮮與品質。
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#8B4513]">70+</p>
                    <p className="text-gray-600 font-['Noto Serif TC']">年製醬經驗</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#8B4513]">30+</p>
                    <p className="text-gray-600 font-['Noto Serif TC']">種產品</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#8B4513]">1000+</p>
                    <p className="text-gray-600 font-['Noto Serif TC']">忠實顧客</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
}
