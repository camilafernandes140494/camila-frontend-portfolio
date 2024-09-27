import { Box, IconButton, MenuItem, Popper, Typography, useTheme } from '@mui/material';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18n';


const LanguageToggle = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [language, setLanguage] = useState('pt')
    const theme = useTheme();

    const { t } = useTranslation();

    const handleChange = (lang: string) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
        setAnchorEl(null)
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const isOpen = Boolean(anchorEl);

    return (
        <>
            <IconButton onClick={handleClick}>
                <Icon
                    icon={language === 'pt' ? 'twemoji:flag-brazil' : 'twemoji:flag-united-states'}
                    width="24"
                    height="24"
                />
            </IconButton>

            <Popper
                open={isOpen}
                anchorEl={anchorEl}
                disablePortal
                sx={{
                    backgroundColor: theme.palette.info.main,
                    boxShadow: theme.shadows[3],
                    borderRadius: '1rem',
                    padding: "0.5rem"
                }}>
                <MenuItem value={'pt'} onClick={() => handleChange('pt')}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: "0.5rem"
                    }}>
                        <Icon icon="twemoji:flag-brazil" width="24" height="24" />
                        <Typography variant="caption">
                            {t('portuguese')}
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem value={'en'} onClick={() => handleChange('en')}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: "0.5rem"
                    }}>
                        <Icon icon="twemoji:flag-united-states" width="24" height="24" />
                        <Typography variant="caption" >
                            {t('english')}
                        </Typography>
                    </Box>
                </MenuItem>
            </Popper>

        </>

    );
};

export default LanguageToggle;
