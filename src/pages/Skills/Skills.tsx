import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SkillCard } from "./components/SkillCard";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        {t("skills")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
        <SkillCard icon="mdi:language-html5" skill="HTML 5" />
      </Box>
    </Box>
  );
};
