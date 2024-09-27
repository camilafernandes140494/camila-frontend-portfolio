import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();

  const linkCV =
    "https://drive.google.com/uc?id=181UX9-DWSk-JByQwanuQijV437GcNz4m&export=download";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = linkCV;
    link.download = "camila-fernandes-cv.pdf";
    link.click();
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "10rem",
        flexDirection: "column",
        gap: "10rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h4">{t("hello")}</Typography>
          <Typography variant="h5">{t("frontend_developer")}</Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "1rem",
            }}
            onClick={handleDownload}
          >
            {t("download_cv")}
          </Button>
        </Box>

        <Avatar sx={{ width: 156, height: 156 }}>CF</Avatar>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "50rem",
        }}
      >
        <Typography variant="h2" textAlign={"center"}>
          {t("about_me")}
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          {t("about_me_description")}
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          {t("contact")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            color="secondary"
            sx={{
              border: "2px solid #A200FF", // Altere a cor para a que desejar
              borderRadius: "8px",
              transition: "0.3s", // Transição suave para o efeito neon
              "&:hover": {
                boxShadow: "0 0 10px #A200FF, 0 0 20px #A200FF",
              },
            }}
          >
            <Icon icon={"mdi:linkedin"} width="48" height="48" />
          </IconButton>
          <IconButton color="secondary">
            <Icon icon={"mdi:github"} width="48" height="48" />
          </IconButton>
          <IconButton color="secondary">
            <Icon icon={"mdi:linkedin"} width="48" height="48" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
