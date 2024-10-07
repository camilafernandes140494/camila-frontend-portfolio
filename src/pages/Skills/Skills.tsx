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
        <SkillCard
          icon="catppuccin:typescript-react"
          skill="React"
          ratingValue={5}
        />
        <SkillCard
          icon="catppuccin:typescript"
          skill="TypeScript"
          ratingValue={5}
        />
        <SkillCard
          icon="catppuccin:javascript"
          skill="JavaScript"
          ratingValue={5}
        />
        <SkillCard
          icon="catppuccin:typescript-react"
          skill="React Native"
          ratingValue={4.5}
        />
        <SkillCard
          icon="devicon:materialui"
          skill="Material UI"
          ratingValue={5}
        />
        <SkillCard icon="catppuccin:next" skill="Next.js" ratingValue={3.5} />
        <SkillCard
          icon="logos:react-query-icon"
          skill="React Query"
          ratingValue={5}
        />
        <SkillCard icon="catppuccin:html" skill="HTML 5" ratingValue={5} />
        <SkillCard
          icon="catppuccin:tailwind"
          skill="Tailwind CSS"
          ratingValue={3.5}
        />
        <SkillCard icon="catppuccin:python" skill="Python" ratingValue={3.5} />
        <SkillCard icon="catppuccin:figma" skill="Figma" ratingValue={3.5} />
        <SkillCard
          icon="catppuccin:storybook-vue"
          skill="Storybook"
          ratingValue={3.5}
        />
        <SkillCard icon="catppuccin:jest" skill="Jest" ratingValue={2.5} />
        <SkillCard
          icon="catppuccin:cypress"
          skill="Cypress"
          ratingValue={2.5}
        />
      </Box>
    </Box>
  );
};
