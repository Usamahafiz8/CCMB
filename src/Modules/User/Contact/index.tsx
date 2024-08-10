import { Grid, Typography } from "@mui/material";
import BrightMedicalBillingCard from "../../../components/BrightMedicalBillingCard";
import ContactUs from "../../../components/ContactUs";

function Contact() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        xs={11}
        sx={{ height: "300px", p: 3 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant={"body1"} color={"grey"}>
          Book A Call
        </Typography>
        <Typography fontWeight={600} variant={"h4"}>Contact Us</Typography>
        <Typography variant={"body2"} align="center">
          Let us help with you with any of your questions and how we operate.
        </Typography>
      </Grid>
      <Grid item sx={{ mt: -14 , pb:6 }} width={"95%"} xs={11}>
        <Grid container rowGap={2} alignItems={"stretch"}>
          <Grid item xs={12} md={4}>
            <BrightMedicalBillingCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <ContactUs />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
