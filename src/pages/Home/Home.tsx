import { Avatar, Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{
            display: 'flex',
            padding: '10rem'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "1rem"
                    }}
                >
                    <Typography variant='h5'>{t('hello')}</Typography>
                    <Typography variant='h6'>{t('frontend_developer')}</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: "1rem"
                    }}>
                        <Button variant="contained"
                            sx={{
                                borderRadius: '1rem'
                            }}
                        >
                            {t('download_cv')}
                        </Button>
                        <Button variant="outlined"
                            sx={{
                                borderRadius: '1rem'
                            }}
                        >
                            {t('download_cv')}
                        </Button>
                    </Box>
                </Box>

                <Avatar sx={{ width: 156, height: 156 }}>CF</Avatar>

            </Box>

        </Box>
    );
};

