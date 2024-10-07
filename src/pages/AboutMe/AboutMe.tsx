import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import camilaImage from "/src/assets/images/camila.jpg";
import molde from "/src/assets/svg/molde.svg";

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
          <Typography variant="h4" textAlign={{ xs: "center", md: "left" }}>
            {t("hello")}
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Sacramento" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {"Camila Fernandes"}
          </Typography>

          <Typography variant="h5" textAlign={{ xs: "center", md: "left" }}>
            {t("frontend_developer")}
          </Typography>
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

        <Box
          sx={{
            position: "relative",
            width: "25rem",
            height: "25rem",
          }}
        >
          <img src={molde} alt="Background SVG" width="100%" height="100%" />
          <svg
            width="80%"
            height="80%"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <defs>
              <mask id="svg-mask">
                <image
                  href={molde}
                  width="100%"
                  height="100%"
                  mask="url(#svg-mask)"
                />
              </mask>
            </defs>
            <image
              href={camilaImage}
              width="100%"
              height="100%"
              mask="url(#svg-mask)"
            />
          </svg>
        </Box>
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
