import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
 
const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={40}
      style ={{ MarginRight:'8rem'}}
    />
  );
};

export default ToggleDark;