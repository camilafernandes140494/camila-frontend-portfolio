import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {  Alert, Button, Snackbar, TextField, Typography } from "@mui/material";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({
  open: false,
  message: "",
  severity: "success",
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const handleCloseSnackbar = () => {
  setSnackbar({ ...snackbar, open: false });
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        serviceId,  
        templateId,  
        form,       
        publicKey 
      )
      .then(
        () => {
        setSnackbar({ open: true, message: "Mensagem enviada com sucesso!", severity: "success" });
          setForm({ name: "", email: "", message: "" });
        },
        () => {
        setSnackbar({ open: true, message: "Erro ao enviar a mensagem. Tente novamente.", severity: "error" });
        }
      );
  };

  return (
    <>
        <Typography variant="h5">Enviar mensagem</Typography>

         <TextField
            label="Nome"
            name="name"
            type="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
        />
        <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
        />
        <TextField
            label="Mensagem"
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            fullWidth
          />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
            Enviar
          </Button>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
            <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
            </Alert>
        </Snackbar>
    </>
  );
};
