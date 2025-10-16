import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);


  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
      <Typography variant="h2" textAlign={"center"}>
        Contato
      </Typography>

      <Box sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {/* LinkedIn */}
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

        {/* Github */}
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

        {/* Whatsapp */}
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

        {/* Email - abre modal */}
        <IconButton
          color="primary"
          onClick={() => setOpen(true)}
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

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.background.paper,
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "90%", sm: 400 },
          }}
        >
          <ContactForm />
        </Box>
      </Modal>
    </Box>
  );
};
