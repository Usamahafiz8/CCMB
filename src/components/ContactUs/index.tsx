import { Card, Grid, Typography } from "@mui/material";
import light from "../../theme/theme";
import Form from "./Form";

function ContactUs() {
  return (
    <Card sx={{ height: "100%" }}>
      <Grid
        sx={{
          paddingBlock: 3,
          paddingInline: 2,
          height: "100%",
          backgroundColor: '#566aeb' //light.palette.primary.main,
        }} 
        container
        gap={2}
      >
        <Grid item xs={12}>
          <Typography color="white" variant={"h4"}>
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Card>
  );
}

export default ContactUs;
