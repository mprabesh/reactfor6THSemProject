import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdatContext = React.createContext();

export function useTheme() {
  console.log(useContext(ThemeContext));
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdatContext);
}

function ThemeContext1({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdatContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdatContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext1;
