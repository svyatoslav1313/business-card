import React, { useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'Blue',
  changeTheme: () => { },
});

type Props = {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Blue' : 'Red';
    }

    return savedTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}