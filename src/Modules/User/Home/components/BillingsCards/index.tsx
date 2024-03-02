import { Grid } from "@mui/material";
import BrightMedicalBillingCard from "../../../../../components/BrightMedicalBillingCard";
import ContactUs from "../../../../../components/ContactUs";

function BillingsCards() {
  return (
    <Grid container alignItems={"stretch"}>
      <Grid item xs={12} lg={6}>
        <BrightMedicalBillingCard />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ContactUs />
      </Grid>
    </Grid>
  );
}

export default BillingsCards;
