import { MouseEventHandler } from "react";
import { useThemeContext } from "./ThemeContext";
import { Button } from "../../ui";

export const ThemeSwitcher = () => {
    const themeContext = useThemeContext();

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {        
        themeContext.toggle();
        console.log(themeContext.theme);
        
    }

    return (
        <Button label={'Switch Theme'} onClick={handleClick} />
    )
}