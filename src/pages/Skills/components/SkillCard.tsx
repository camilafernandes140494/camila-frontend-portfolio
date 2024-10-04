import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Card, Rating, Typography, useTheme } from "@mui/material";
import { useState } from "react";

type SkillCardProps = {
  icon: string;
  skill: string;
};

export const SkillCard = ({ icon, skill }: SkillCardProps) => {
  const theme = useTheme();
  const [hover, setHover] = useState(false); // Estado para controlar o hover

  return (
    <Card
      variant="outlined"
      sx={{
        padding: hover ? "1.5rem" : "1rem",
        backgroundColor: theme.palette.background.paper,
        borderLeft: `10px solid ${theme.palette.primary.main}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon icon={icon} width="3rem" height="3rem" />
      <Typography variant="body1" textAlign={"center"}>
        {skill}
      </Typography>

      <Box
        sx={{
          transition: "opacity 0.3s ease-in-out",
          opacity: hover ? 1 : 0,
          height: hover ? "auto" : 0,
          overflow: "hidden",
        }}
      >
        <Rating defaultValue={5} precision={0.5} readOnly />
      </Box>
    </Card>
  );
};
