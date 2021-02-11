import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
 
const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);
 
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
 
  return (
    <DarkModeSwitch
      style={{ marginBottom: '1rem', marginTop: '-6rem', marginRight: '2rem', paddingLeft: '35px' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={60}
    />
  );
};
export default DarkModeToggle;