
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeDisplay: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center'
      }}
    >
      <h2>Tema atual: {theme}</h2>
      <button onClick={toggleTheme}>
        Trocar para {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </div>
  );
};

export default ThemeDisplay;
