import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-Talk release",
    "Implement new Color Palette from Design Team",
    "Fix image uploading process for guest check-in",
    "Provide on-boarding documentation"
  ]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index: number) => {
    const todo = todos[index];
    setCompleted([...completed, todo]);
    handleDeleteTodo(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Chores ToDo List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{todo}</span>
              <div className="flex items-center">
                <button
                  className="text-green-500 hover:text-green-700 mr-2"
                  onClick={() => handleCompleteTodo(index)}
                >
                  ✓
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteTodo(index)}
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
            placeholder="Add todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="w-full mt-2 p-2 bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleAddTodo}
          >
            ADD TASK
          </button>
        </div>
        <h2 className="text-lg font-bold mt-4">Done: {completed.length}</h2>
        <ul>
          {completed.map((todo, index) => (
            <li key={index} className="text-gray-500">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
