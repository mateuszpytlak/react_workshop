import { createContext, useContext, useEffect, useRef } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

type ThemeContextType = {
    theme: React.MutableRefObject<Theme>,
    toggle: () => void,
}

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = 'ThemeContext';

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error('Component should by in ThemeContextProvider!')
    }
    return context;
};

export const getMode = () => {
    if (window.matchMedia) {
        const matchesLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
        return matchesLightMode ? Theme.LIGHT : Theme.DARK;
    }
    return null;
};

const removeDarkClass = () => document.body.classList.remove('dark');
const addDarkClass = () => document.body.classList.add('dark');


const useTheme = () => {
    //const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    console.log(getMode());
    
    const theme = useRef<Theme | null>(getMode());

    // const toggle = () => {        
    //     if (theme === Theme.LIGHT) {
    //         setTheme(Theme.DARK)
    //         document.body.classList.add('dark');           
    //     } else {
    //         setTheme(Theme.LIGHT)
    //         document.body.classList.remove('dark');
    //     }
    // }

    useEffect( () => {
        const themeMode = getMode();

        if (themeMode === Theme.DARK) {
            addDarkClass();
        }

        const handleSchemeChange = (event: MediaQueryListEvent) => {
            if (event.matches) {
                addDarkClass();
            } else {
                removeDarkClass();
            }
        }

        let query: MediaQueryList;
        if (themeMode !== null) {
            query = window.matchMedia('(prefers-color-scheme: dark)');
            query.addEventListener('change', handleSchemeChange) 
        }

        return () => {
            query?.removeEventListener('change', handleSchemeChange);
        }
    }, []);


    const toggle = () => {       
        if (theme.current === Theme.LIGHT) {
            addDarkClass();
            theme.current = Theme.DARK
        } else {
            removeDarkClass();
            theme.current = Theme.LIGHT
        }
    }

    return { theme, toggle };
}

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ThemeContext.Provider value={useTheme()}>
            {children}
        </ThemeContext.Provider>
    )
}