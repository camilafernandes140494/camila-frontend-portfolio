import { AppBar, Toolbar, Typography } from '@mui/material';

import ThemeToggle from './ThemeToggle';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';


const Header = () => {
    const { t } = useTranslation();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    {t('portfolio')}
                </Typography>
                <LanguageToggle />
                <ThemeToggle />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
