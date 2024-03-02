import { Grid, Stack, Typography } from "@mui/material";
import Cards from "./Cards";
import { DataCards } from "./data";

function Section() {
  return (
    <Grid container>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        marginBottom={6}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "70%", height: "100%" }}
          direction={"column"}
          gap={3}
        >
          <Typography
            textAlign={"center"}
            color={"black"}
            fontWeight={600}
            variant={"h4"}
          >
            Our Specialities
          </Typography>
          <Typography textAlign={"center"} fontWeight={500} variant={"body1"}>
            As a psychologist and a cognitive behavioral therapist, I have
            worked with hundreds of patients and understand the intricacies of
            various psychological issues that people face.
          </Typography>
        </Stack>
      </Grid>
      {DataCards?.map((e, i) => (
          <Grid item key={i} xs={12} md={6} lg={3}>
            <Cards data={e} />
          </Grid>
        ))}
    </Grid>
  );
}

export default Section;
