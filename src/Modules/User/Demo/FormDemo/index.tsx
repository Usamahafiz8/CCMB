import { Grid, CircularProgress } from "@mui/material";
import CustomTextField from "./CustomTextField";
import Buttons from "../../../../components/MUI/Buttons";
import { useState } from "react";
import emailjs from 'emailjs-com';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function MedicalBillingRequestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    practiceName: '',
    phoneNumber: '',
    servicesRequired: '',
    contactTime: '',
    additionalDetails: ''
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = () => {
    setLoading(true); // Start loading
    emailjs.send('service_vcsvg0p', 'template_g376k03', formData, 'sgZQU198Qj-aNCSfp')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false); // Stop loading
        setNotification(true); // Show success notification
        setFormData({ // Reset form fields
          fullName: '',
          email: '',
          practiceName: '',
          phoneNumber: '',
          servicesRequired: '',
          contactTime: '',
          additionalDetails: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
        setLoading(false); // Stop loading on failure
      });
  };

  return (
    <Grid container sx={{ pb: 6 }}>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Email" name="email" value={formData.email} onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Practice Name" name="practiceName" value={formData.practiceName} onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Type of Services Required" name="servicesRequired" value={formData.servicesRequired} onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Preferred Contact Time" name="contactTime" value={formData.contactTime} onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12}>
        <CustomTextField label="Additional Details" name="additionalDetails" value={formData.additionalDetails} onChange={handleInputChange} fullWidth multiline rows={4} />
      </Grid>
      <Grid
        item
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={12}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Buttons onClick={sendEmail}>Submit Request</Buttons>
        )}
      </Grid>
      <Snackbar open={notification} autoHideDuration={6000} onClose={() => setNotification(false)}>
        <Alert onClose={() => setNotification(false)} severity="success" sx={{ width: '100%' }}>
          Your request has been submitted successfully! We will contact you soon.
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default MedicalBillingRequestForm;
