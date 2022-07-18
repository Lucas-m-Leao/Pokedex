import { createContext, useEffect, useState } from "react";

export const WindowContext = createContext([]);
export const WindowProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateScreen = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);
  return (
    <WindowContext.Provider value={{ width }}>
      {children}
    </WindowContext.Provider>
  );
};
