import { createContext, useContext, useRef } from "react";

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


const useTheme = () => {
    //const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const theme = useRef<Theme>(Theme.LIGHT);

    // const toggle = () => {        
    //     if (theme === Theme.LIGHT) {
    //         setTheme(Theme.DARK)
    //         document.body.classList.add('dark');           
    //     } else {
    //         setTheme(Theme.LIGHT)
    //         document.body.classList.remove('dark');
    //     }
    // }

    const toggle = () => {
        if (theme.current === Theme.LIGHT) {
            document.body.classList.add('dark');
            theme.current = Theme.DARK
        } else {
            document.body.classList.remove('dark');
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