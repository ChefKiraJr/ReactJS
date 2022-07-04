import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeCount = React.createContext();
const ThemeUpdate = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useCount() {
  return useContext(ThemeCount);
}
export function useUpdate() {
  return useContext(ThemeUpdate);
}

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [count, setCount] = useState(0);
  const handleUpdate = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeCount.Provider value={count}>
        <ThemeUpdate.Provider value={handleUpdate}>{children}</ThemeUpdate.Provider>
      </ThemeCount.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// export const Button = () => {
//   return <button>Test Button</button>;
// };
