import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import SunTheme from '../assets/img/Sun_theme_btn.svg';
import MoonTheme from '../assets/img/Moon_theme_btn.svg';
import styles from './styles/theme_button.module.css';


export function ThemeButton () {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const icon = theme === 'light' ? SunTheme : MoonTheme;
    return(
        <>
        <button className={styles.theme_btn} onClick={toggleTheme}><img src={icon} alt="Toggle Theme" /></button>
        </>
    )
}