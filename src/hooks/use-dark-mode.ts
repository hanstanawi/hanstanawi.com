import { DarkModeContext } from 'context/DarkModeContext';
import { useContext } from 'react';

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
