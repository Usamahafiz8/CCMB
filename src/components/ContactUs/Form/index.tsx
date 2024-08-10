import React, { useState } from "react";
import { Grid, TextField, Typography, Alert } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import emailjs from "emailjs-com";
import Buttons from "../../MUI/Buttons";

// Define the types for the form data and errors
interface FormData {
  help: string;
  email: string;
  name: string;
  number: string;
  date: Dayjs | null;
}

interface Errors {
  help?: string;
  email?: string;
  name?: string;
  number?: string;
  date?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    help: "",
    email: "",
    name: "",
    number: "",
    date: dayjs(), // Default to today's date
  });

  const [notification, setNotification] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: !e.target.value ? `${e.target.name} is required` : "",
    });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData({
      ...formData,
      date: date,
    });
    setErrors({
      ...errors,
      date: !date ? "Preferred contact date is required" : "",
    });
  };

  const validateForm = (): boolean => {
    let valid = true;
    let newErrors: Errors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.number) {
      newErrors.number = "Phone number is required";
      valid = false;
    }
    if (!formData.date) {
      newErrors.date = "Preferred contact date is required";
      valid = false;
    }
    if (!formData.help) {
      newErrors.help = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "service_vcsvg0p", // Replace with your service ID
          "template_qh1v17a", // Replace with your template ID
          {
            ...formData,
            date: formData.date?.format("YYYY-MM-DD"), // Format the date as needed
          },
          "sgZQU198Qj-aNCSfp" // Replace with your user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setNotification("Email sent successfully!");
            setFormData({
              help: "",
              email: "",
              name: "",
              number: "",
              date: dayjs(), // Reset to today's date
            });
          },
          (error) => {
            console.log(error.text);
            setNotification("Failed to send email. Please try again.");
          }
        );
    } else {
      setNotification("Please fill in all required fields correctly.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={12}>
          <TextField
            name="name"
            label="Name"
            placeholder="Enter your name"
            fullWidth
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black", background: "white" } }}
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            name="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black", background: "white" } }}
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            name="number"
            label="Phone Number"
            placeholder="Enter your phone number"
            fullWidth
            required
            error={Boolean(errors.number)}
            helperText={errors.number}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black", background: "white" } }}
            value={formData.number}
            onChange={handleChange}
            />
        </Grid>

        {/* <Grid item xs={12} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Preferred Contact Date"
              value={formData.date}
              onChange={handleDateChange}
              disableFuture // Disables future dates
              // @ts-ignore
              renderInput={(params) => (
                <TextField
                {...params}
                fullWidth
                required
                error={Boolean(errors.date)}
                helperText={errors.date}
                  InputLabelProps={{ style: { color: "black" } }}
                  InputProps={{ style: { color: "black", background: "white" } }}
                  />
                )}
                InputProps={{ style: { color: "black", background: "white" } }}
            />
          </LocalizationProvider>
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            name="help"
            label="How can we help?"
            placeholder="Describe your issue or question"
            multiline
            rows={4}
            fullWidth
            required
            error={Boolean(errors.help)}
            helperText={errors.help}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black", background: "white" } }}
            value={formData.help}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Buttons
            sx={{ p: 1.6 }}
            colorBtn={"black"}
            backgroundBtn={"white"}
            fullWidth
            // @ts-ignore
            type="submit"
          >
            Send
          </Buttons>
        </Grid>
      </Grid>
      {notification && (
        <Alert severity={notification.includes("successfully") ? "success" : "error"} sx={{ mt: 2 }}>
          {notification}
        </Alert>
      )}
    </form>
  );
}

export default ContactForm;
