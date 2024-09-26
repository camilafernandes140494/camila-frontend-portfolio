import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <Typography>{t('hello')}</Typography>
        </Box>
    );
};

