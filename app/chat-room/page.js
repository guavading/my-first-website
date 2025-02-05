'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      // 新增使用者訊息
      const userMessage = {
        id: Date.now(),
        text: message,
        timestamp: new Date().toLocaleTimeString(),
        isUser: true
      };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      setIsLoading(true);

      try {
        // 發送請求到 AI API
        const response = await fetch('/chat-ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userInput: message }),
        });

        if (!response.ok) {
          throw new Error('API 請求失敗');
        }

        const data = await response.json();

        // 新增 AI 回應
        const aiMessage = {
          id: Date.now() + 1,
          text: data.response,
          timestamp: new Date().toLocaleTimeString(),
          isUser: false
        };
        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error('錯誤:', error);
        // 顯示錯誤訊息
        const errorMessage = {
          id: Date.now() + 1,
          text: '抱歉，發生錯誤，請稍後再試。',
          timestamp: new Date().toLocaleTimeString(),
          isUser: false
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#8B4513] font-['Noto Serif TC']">聊天室</h1>
      
      {/* 聊天輸入區域 */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="輸入訊息..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513] font-['Noto Serif TC']"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-6 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#654321] transition-colors duration-300 font-['Noto Serif TC'] flex items-center gap-2 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
            {isLoading ? '處理中...' : '發送'}
          </button>
        </div>
      </form>

      {/* 聊天訊息顯示區域 */}
      <div className="space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
          >
            <div className={`px-4 py-2 rounded-lg max-w-[80%] ${
              msg.isUser 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="font-['Noto Serif TC']">{msg.text}</p>
            </div>
            <span className="text-sm text-gray-500 mt-1">{msg.timestamp}</span>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-center text-gray-500 font-['Noto Serif TC']">尚無訊息</p>
        )}
      </div>
    </div>
  );
} 