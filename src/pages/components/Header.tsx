import { useState } from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, InputAdornment, } from '@mui/material';

import ThemeToggle from './ThemeToggle';
import i18n from '../../locales/i18n';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation();

    const [language, setLanguage] = useState('pt')

    const handleChange = (event: any) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Meu Projeto
                </Typography>

                <Select
                    value={language}
                    onChange={handleChange}
                    renderValue={() => (
                        <Icon icon={language === 'pt' ? 'twemoji:flag-brazil' : 'twemoji:flag-united-states'} width="24" height="24" />
                    )}
                    label="Language"
                >
                    <MenuItem value={'pt'}>
                        <Icon icon="twemoji:flag-brazil" width="24" height="24" /> {t('portuguese')}
                    </MenuItem>
                    <MenuItem value={'en'}>
                        <Icon icon="twemoji:flag-united-states" width="24" height="24" /> {t('english')}
                    </MenuItem>
                </Select>
                <ThemeToggle />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
