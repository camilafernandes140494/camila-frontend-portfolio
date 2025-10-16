import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import camilaImage from "/src/assets/images/camila.jpg";
import molde from "/src/assets/svg/molde.svg";

export const AboutMe = () => {
  const { t } = useTranslation();

  const linkCV =
    "https://drive.google.com/uc?id=1uVWw3gPE-swQMqHCt_TrTqkFuvKfYhrC&export=download";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = linkCV;
    link.download = "camila-fernandes-cv.pdf";
    link.click();
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "4rem", md: "6rem" },
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #f6edf9 0%, #e9dff3 100%)"
            : "linear-gradient(135deg, #2c2432 0%, #3a2f46 100%)",
        py: { xs: 4, md: 8 },
        px: 2,
        borderRadius: "2rem",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          gap: { xs: "2rem", md: "4rem" },
        }}
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 500,
                letterSpacing: 1,
              }}
            >
              {t("hello")}
            </Typography>

            {/* Typing Animation */}
            <motion.div
              style={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: "3px solid #B57EDC",
                width: "fit-content",
                alignSelf: "center",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Sacramento, cursive",
                  fontSize: { xs: "3rem", md: "4rem" },
                  color: "secondary.main",
                  textShadow: "1px 1px 12px rgba(156, 137, 184, 0.4)",
                }}
              >
                Camila Fernandes
              </Typography>
             
            </motion.div>
 
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                letterSpacing: 0.5,
              }}
            >
              {t("frontend_developer")}
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: "2rem",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                mt: 2,
                background: "linear-gradient(90deg, #B57EDC 0%, #9C89B8 100%)",
                boxShadow: "0 8px 20px rgba(156,137,184,0.4)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 30px rgba(156,137,184,0.5)",
                },
              }}
              onClick={handleDownload}
            >
              {t("download_cv")}
            </Button>
          </Box>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "18rem", md: "25rem" },
              height: { xs: "18rem", md: "25rem" },
              borderRadius: "50%",
              overflow: "hidden",
              backgroundImage: `url(${camilaImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMaskImage: `url(${molde})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: `url(${molde})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              boxShadow:
                "0 15px 40px rgba(156,137,184,0.5), inset 0 0 15px rgba(255,255,255,0.3)",
              border: "4px solid rgba(181,126,220,0.2)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow:
                  "0 20px 50px rgba(156,137,184,0.7), inset 0 0 20px rgba(255,255,255,0.4)",
              },
            }}
          />
        </motion.div>
      </Box>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
            maxWidth: "50rem",
            mx: "auto",
            px: 2,
            borderRadius: "2rem",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            {t("about_me")}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            lineHeight={1.7}
            sx={{
              fontSize: "1.1rem",
              maxWidth: "42rem",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
              p: 3,
              borderRadius: "2rem",
              boxShadow: "0 6px 25px rgba(156,137,184,0.25)",
            }}
          >
            {t("about_me_description")}
          </Typography>
        </Box>
      </motion.div>

      {/* Signature */}
      <Typography
        variant="body2"
        sx={{
          mt: 6,
          color: "text.secondary",
          fontStyle: "italic",
        }}
      >
        Design & Code by Camila Fernandes 💜
      </Typography>
    </Box>
  );
};
