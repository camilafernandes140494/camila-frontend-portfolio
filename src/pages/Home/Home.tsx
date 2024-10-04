import { Box } from "@mui/material";
import { AboutMe } from "../AboutMe/AboutMe";
import Header from "../components/Header";
import { Contact } from "../Contact/Contact";
import { Skills } from "../Skills/Skills";

export const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          padding: { xs: "2rem", md: "10rem" },
          flexDirection: "column",
          gap: { xs: "2rem", md: "10rem" },
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AboutMe />
        <Skills />
        <Contact />
      </Box>
    </>
  );
};
