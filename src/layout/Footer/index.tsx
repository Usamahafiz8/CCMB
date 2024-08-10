import { Divider, Grid } from "@mui/material";
import Upper from "./components/Upper";
import light from "../../theme/theme";
import Lower from "./components/Lower";

function Footer() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      sx={{ background: light.palette.primary.main, p: 3, color: "white" }}
    >
      <Grid item xs={11}>
        <Upper />
      </Grid>
      <Grid item xs={11}>
        <Divider sx={{ backgroundColor: "white" }} />
      </Grid>
      <Grid item xs={11}>
        <Lower/>
      </Grid>
        
    </Grid>
  );
}

export default Footer;
