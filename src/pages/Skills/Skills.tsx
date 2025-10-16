import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SkillCard } from "./components/SkillCard";
import { motion, Variants, Transition } from "framer-motion";

export const Skills = () => {
  const { t } = useTranslation();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // substitui a string "easeOut" por um array de Bezier
      } as Transition,
    }),
  };

  const skills = [
    { icon: "catppuccin:typescript-react", skill: "React", rating: 5 },
    { icon: "catppuccin:typescript", skill: "TypeScript", rating: 5 },
    { icon: "catppuccin:javascript", skill: "JavaScript", rating: 5 },
    { icon: "catppuccin:typescript-react", skill: "React Native", rating: 4.5 },
    { icon: "devicon:materialui", skill: "Material UI", rating: 5 },
    { icon: "catppuccin:next", skill: "Next.js", rating: 3.5 },
    { icon: "logos:react-query-icon", skill: "React Query", rating: 5 },
    { icon: "catppuccin:html", skill: "HTML 5", rating: 5 },
    { icon: "catppuccin:tailwind", skill: "Tailwind CSS", rating: 3.5 },
    { icon: "catppuccin:python", skill: "Python", rating: 3.5 },
    { icon: "catppuccin:figma", skill: "Figma", rating: 3.5 },
    { icon: "catppuccin:storybook-vue", skill: "Storybook", rating: 3.5 },
    { icon: "catppuccin:jest", skill: "Jest", rating: 2.5 },
    { icon: "catppuccin:cypress", skill: "Cypress", rating: 2.5 },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #efe6f9 0%, #e1d6ef 100%)"
            : "linear-gradient(135deg, #2a2433 0%, #3a2f46 100%)",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        borderRadius: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "primary.main",
            letterSpacing: 1.5,
            mb: 2,
          }}
        >
          {t("skills")}
        </Typography>
      </motion.div>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          maxWidth: "1200px",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.skill}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            <SkillCard
              icon={skill.icon}
              skill={skill.skill}
              ratingValue={skill.rating}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
