import { IconButton } from '@mui/material';

import { useThemeContext } from '../Theme/ThemeContext';

import { Icon } from '@iconify/react';


const ThemeToggle = () => {
    const { toggleTheme, isDarkMode } = useThemeContext();

    return (
        <IconButton color="inherit" onClick={toggleTheme}>
            <Icon icon={isDarkMode ? 'mdi:white-balance-sunny' : 'mdi:weather-night'} width="24" height="24" />
        </IconButton>
    );
};

export default ThemeToggle;
