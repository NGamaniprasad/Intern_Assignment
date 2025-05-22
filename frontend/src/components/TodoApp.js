import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoApp.css';

const API = 'http://localhost:5000/api';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post(`${API}/todos`, { text });
    setText('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/todos/${id}`);
    fetchTodos();
  };

  const summarize = async () => {
    try {
      const res = await axios.post(`${API}/summarize`);
      setMessage(res.data.message);
    } catch (e) {
      setMessage('Failed to send summary.');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <div className="todo-main">
        <h1>📝 Todo Summary Assistant</h1>

        <div className="input-group">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter todo"
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>Delete(❌)</button>
            </li>
          ))}
        </ul>

        <button className="summarize-btn" onClick={summarize}>
          Summarize and Send to Slack
        </button>

        {message && <p className="message">{message}</p>}
      </div>

      <footer className="footer">
        © 2025 Made by <span className="author">Gamani All rights reserved</span>
      </footer>
    </div>
  );
}
