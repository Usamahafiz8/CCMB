import { Grid } from "@mui/material";
import Banner from "./components/Banner";
import BillingsCards from "./components/BillingsCards";
import Services from "./components/Services";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import MissionVision from "./components/MissionVision";

function Home() {
  return (
    <Grid
      sx={{ mb: 8 }}
      container
      justifyContent={"center"}
      alignItems={"center"}
      gap={12}
    >
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item sx={{ mt: -14, zIndex: "3" }} xs={11}>
        <BillingsCards />
      </Grid>
      <Grid item xs={11}>
        <Services />
      </Grid>
      <Grid item xs={11}>
        <Features />
      </Grid>
      <Grid item xs={12}>
        <MissionVision />
      </Grid>
      <Grid item xs={11}>
        <Gallery />
      </Grid>
      <Grid item xs={12}>
        <Benefits />
      </Grid>
    </Grid>
  );
}

export default Home;
