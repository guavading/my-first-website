import './globals.css'
import Navbar from './components/Navbar'
import AppFooter from './components/AppFooter'

export const metadata = {
  title: '合家興 - 純手工製作',
  description: '傳承三代的手工醬料製作',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-[#FFF8DC]">
        <Navbar />
        <main className="bg-white min-h-screen">
        {children}
        </main>
        <AppFooter />
      </body>
    </html>
  )
}
