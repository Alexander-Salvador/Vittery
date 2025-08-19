import { useEffect, useState } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="theme-toggle-container">
      <button
        className={`toggle ${darkMode ? 'dark' : 'light'}`}
        onClick={() => setDarkMode(!darkMode)}>
        <span className="icon">{darkMode ? '🌙' : '☀️'}</span>
      </button>
      {/* <p className="label"> {darkMode ? '' : ''}</p> */}
    </div>
  );
}
