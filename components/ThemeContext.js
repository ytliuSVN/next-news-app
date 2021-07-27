import { useReducer, useContext, createContext } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT_MODE':
      return { darkMode: false };
    case 'DARK_MODE':
      return { darkMode: true };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const initialState = { darkMode: false };
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const theme = () => useContext(ThemeContext);
