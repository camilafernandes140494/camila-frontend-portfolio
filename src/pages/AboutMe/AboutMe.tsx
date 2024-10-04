import { Avatar, Box, Button, Typography } from "@mui/material";
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
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
          <Typography variant="h2" sx={{ fontFamily: "Sacramento" }}>
            {"Camila Fernandes"}
          </Typography>

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

        <Avatar sx={{ width: "10rem", height: "10rem" }}>CF</Avatar>
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
      </Box>
    </>
  );
};
