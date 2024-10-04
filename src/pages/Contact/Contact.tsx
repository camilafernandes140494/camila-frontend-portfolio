import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        {t("contact")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          color="primary"
          component="a"
          href="https://www.linkedin.com/in/camila-fernandes-0228b314a/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "0.5rem",
            transition: "0.3s",
            "&:hover": {
              boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
            },
          }}
        >
          <Icon icon={"mdi:linkedin"} width="3rem" height="3rem" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/camilafernandes140494"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "0.5rem",
            transition: "0.3s",
            "&:hover": {
              boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
            },
          }}
        >
          <Icon icon={"mdi:github"} width="3rem" height="3rem" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://wa.me/5519999669947"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "0.5rem",
            transition: "0.3s",
            "&:hover": {
              boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
            },
          }}
        >
          <Icon icon={"mdi:whatsapp"} width="3rem" height="3rem" />
        </IconButton>
        <IconButton
          color="primary"
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "0.5rem",
            transition: "0.3s",
            "&:hover": {
              boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
            },
          }}
        >
          <Icon icon={"mdi:alternate-email"} width="3rem" height="3rem" />
        </IconButton>
      </Box>
    </Box>
  );
};
