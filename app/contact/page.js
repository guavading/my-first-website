'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以加入表單提交的邏輯
    alert('感謝您的來信，我們會盡快回覆！');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#8B4513] font-['Noto Serif TC']">聯絡我們</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 聯絡資訊區塊 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#8B4513] font-['Noto Serif TC']">聯絡資訊</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#8B4513] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] font-['Noto Serif TC']">地址</h3>
                <p className="text-gray-600 font-['Noto Serif TC']">台南市中西區永福路二段168號</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#8B4513] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] font-['Noto Serif TC']">電話</h3>
                <p className="text-gray-600">06-2345-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#8B4513] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] font-['Noto Serif TC']">電子郵件</h3>
                <p className="text-gray-600">service@traditional-sauce.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#8B4513] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] font-['Noto Serif TC']">營業時間</h3>
                <p className="text-gray-600 font-['Noto Serif TC']">週一至週五：09:00 - 18:00</p>
                <p className="text-gray-600 font-['Noto Serif TC']">週六：10:00 - 17:00</p>
                <p className="text-gray-600 font-['Noto Serif TC']">週日：公休</p>
              </div>
            </div>
          </div>
        </div>

        {/* 聯絡表單 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#8B4513] font-['Noto Serif TC']">聯絡表單</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-['Noto Serif TC'] mb-2">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-['Noto Serif TC'] mb-2">電子郵件</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-['Noto Serif TC'] mb-2">主旨</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-['Noto Serif TC'] mb-2">訊息內容</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#654321] transition-colors duration-300 font-['Noto Serif TC']"
            >
              送出訊息
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 