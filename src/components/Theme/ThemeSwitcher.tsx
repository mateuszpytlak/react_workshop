import { MouseEventHandler, useState } from "react";
import { getMode, Theme, useThemeContext } from "./ThemeContext";
import { Button } from "../../ui";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme | null>(getMode());

    const themeContext = useThemeContext();

    const handleClick: MouseEventHandler = () => {
        themeContext.toggle();
        setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    }

    const icon = themeContext.theme.current === Theme.DARK ? <SunIcon onClick={handleClick} className="h-4 w-4 text-slate-300 cursor-pointer" /> : <MoonIcon onClick={handleClick} className="h-4 w-4 text-slate-900  cursor-pointer" />;

    return (
        <div className="mb-4">{icon}</div>
    )
}