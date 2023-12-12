import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

type DarkModeContextProviderProps = {
  children: ReactNode;
};

type DarkModeContext = {
  isDark: boolean;
  toggleMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContext>({
  isDark: false,
  toggleMode: () => {},
});

const checkDarkMode = (): boolean =>
  (localStorage && localStorage.theme === 'dark') ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

const getThemeString = (isDark: boolean): string => (isDark ? 'dark' : 'light');

const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = useCallback((): void => {
    localStorage.theme = getThemeString(!isDark);
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDark(!isDark);
  }, [isDark]);

  useEffect(() => {
    setIsDark(checkDarkMode());

    // Watch for changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light';
        if (colorScheme === 'dark') {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      });
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
