import { Box, Grid } from "@mui/material";
import BrightMedicalBillingCard from "../../../../../components/BrightMedicalBillingCard";
import ContactUs from "../../../../../components/ContactUs";

function BillingsCards() {
  return (
      <Box sx={{justifyContent:"center"}}>
    {/* <Grid container > */}
      {/* <Grid item xs={12} lg={6}>
        <BrightMedicalBillingCard />
      </Grid> */}
      {/* <Grid item xs={12} lg={6}> */}
        <ContactUs />
      {/* </Grid> */}
    {/* </Grid> */}

    </Box>
  );
}

export default BillingsCards;
