import { Grid } from "@mui/material";
import UpperNav from "./components/UpperNav";
import LowerNav from "./components/LowerNav";
function Navbar() {

  return (
    <Grid
      sx={{ backgroundColor: "white" }}
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12}>
        <UpperNav />
      </Grid>
      <Grid item xs={11}>
        <LowerNav />
      </Grid>
    </Grid>
  );
}

export default Navbar;
