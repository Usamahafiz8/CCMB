import { Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import Buttons from "../../../../components/MUI/Buttons";

function FormDemo() {
  return (
    <Grid container sx={{ pb: 6 }}>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Full Name" fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Email" fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Address" fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Event Address" fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="Event End Time" fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4}>
        <CustomTextField label="How you hear about us?" fullWidth />
      </Grid>
      <Grid item sx={{ p: 2 }} xs={12}>
        <CustomTextField label="Message" fullWidth />
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
        <Buttons>Request a Call</Buttons>
      </Grid>
    </Grid>
  );
}

export default FormDemo;
