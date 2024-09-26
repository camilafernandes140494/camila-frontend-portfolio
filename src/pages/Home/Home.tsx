import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';
import i18n from '../../locales/i18n';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const [language, setLanguage] = useState('pt')
    const { t } = useTranslation();

    const handleChange = (event: any) => {
        const selectedLanguage = event.target.value;
        console.log(selectedLanguage)
        setLanguage(selectedLanguage); // Atualiza o estado
        i18n.changeLanguage(selectedLanguage); // Muda o idioma do i18next
    };

    return (
        <Box>
            <Typography>{t('welcome')}</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'pt'}>portugues</MenuItem>
                    <MenuItem value={'en'}>ingles</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

