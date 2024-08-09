import { Grid, Typography } from "@mui/material";
import CardsGrid from "./components/CardsGrid";
import Buttons from "../MUI/Buttons";

function ServicesCommon() {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <Typography variant={"h4"} textAlign={"center"} fontWeight={600}>
          Our Services
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"body2"} textAlign={"center"}>
        As a medical billing specialist, we have managed the billing and coding processes for hundreds of patients, ensuring accurate and efficient handling of various insurance claims and payments.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CardsGrid />
      </Grid>
      <Grid item xs={12}>
        <Buttons sx={{ margin: "auto", display: "block" }}>
          View All Services
        </Buttons>
      </Grid>
    </Grid>
  );
}

export default ServicesCommon;
