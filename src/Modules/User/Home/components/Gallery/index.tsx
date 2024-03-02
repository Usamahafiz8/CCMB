import { Grid, Typography } from "@mui/material";
import Buttons from "../../../../../components/MUI/Buttons";
import CardsGrid from "./components/CardsGrid";

function Gallery() {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <Typography variant={"h4"} textAlign={"center"} fontWeight={600}>
          Our Recent Photos
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"body2"} textAlign={"center"}>
          As a psychologist and a cognitive behavioral therapist, I have worked
          with hundreds of patients and understand the intricacies of various
          psychological issues that people face.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CardsGrid />
      </Grid>
      <Grid item xs={12}>
        {/* <Buttons sx={{ margin: "auto", display: "block" }}>
          View All Photos
        </Buttons> */}
      </Grid>
    </Grid>
  );
}

export default Gallery;
