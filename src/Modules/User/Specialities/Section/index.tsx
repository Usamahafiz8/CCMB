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
          sx={{  width: "70%", height: "100%" ,  '@media (max-width: 900px)': {
            width: '90%', // Width for screens larger than 900px
          },}}
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
          As a medical billing specialist, We have managed the billing and coding processes for hundreds of patients, ensuring accurate and efficient handling of various insurance claims and payments.
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
