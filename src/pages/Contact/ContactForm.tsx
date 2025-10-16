import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {  Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  
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
        <Typography variant="h5">{t("send_message")}</Typography>

         <TextField
            label={t("name")}
            name="name"
            type="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
        />
        <TextField
            label="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
        />
        <TextField
            label={t("message")}
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            fullWidth
          />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
            {t("send")}
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
