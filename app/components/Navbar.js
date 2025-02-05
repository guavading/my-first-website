export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#9E5826] text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <nav className="space-x-4">
            <a
              href="/"
              className="inline-block px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#8B4513] transition-colors duration-300 font-['Noto Serif TC']"
            >
              首頁
            </a>
            <a
              href="/about_me"
              className="inline-block px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#8B4513] transition-colors duration-300 font-['Noto Serif TC']"
            >
              關於本店
            </a>
            <a
              href="/todo"
              className="inline-block px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#8B4513] transition-colors duration-300 font-['Noto Serif TC']"
            >
              待辦事項
            </a>
            <a
              href="/chat-room"
              className="inline-block px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#8B4513] transition-colors duration-300 font-['Noto Serif TC']"
            >
              聊天室
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#8B4513] transition-colors duration-300 font-['Noto Serif TC']"
            >
              聯絡資訊
            </a>
          </nav>
        </div>
      </header>
      {/* 新增一個空的 div 來補償固定導覽列的高度 */}
      <div className="h-[72px]"></div>
    </>
  );
} 