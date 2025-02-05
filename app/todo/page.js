'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('普通');

  // 載入儲存的待辦事項
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      // 確保所有待辦事項都有 priority 屬性
      const updatedTodos = parsedTodos.map(todo => ({
        ...todo,
        priority: todo.priority || '普通' // 如果沒有 priority，設為普通
      }));
      setTodos(updatedTodos);
    }
  }, []);

  // 當待辦事項改變時儲存到 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: newTodo, 
        completed: false,
        priority: priority 
      }]);
      setNewTodo('');
      setPriority('普通'); // 重置為預設值
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 取得標記的顏色
  const getPriorityColor = (priority) => {
    switch (priority) {
      case '緊急':
        return 'bg-red-100 text-red-800';
      case '重要':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#8B4513] font-['Noto Serif TC']">待辦事項</h1>
      
      {/* 新增待辦事項表單 */}
      <form onSubmit={addTodo} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="輸入待辦事項..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513] font-['Noto Serif TC']"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B4513] font-['Noto Serif TC']"
          >
            <option value="普通">普通</option>
            <option value="重要">重要</option>
            <option value="緊急">緊急</option>
          </select>
          <button
            type="submit"
            className="px-6 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#654321] transition-colors duration-300 font-['Noto Serif TC'] flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
            新增
          </button>
        </div>
      </form>

      {/* 待辦事項列表 */}
      <div className="space-y-4">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5 accent-[#8B4513]"
            />
            <span
              className={`flex-1 font-['Noto Serif TC'] ${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
              }`}
            >
              {todo.text}
            </span>
            <span className={`px-2 py-1 rounded-full text-sm ${getPriorityColor(todo.priority)} font-['Noto Serif TC']`}>
              {todo.priority}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faTrashCan} className="w-4 h-4" />
              刪除
            </button>
          </div>
        ))}
        {todos.length === 0 && (
          <p className="text-center text-gray-500 font-['Noto Serif TC']">目前沒有待辦事項</p>
        )}
      </div>
    </div>
  );
} 