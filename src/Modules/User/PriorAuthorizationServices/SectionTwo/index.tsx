import { Grid, Stack, Typography } from "@mui/material";
import ImageOne from "../../../../assets/Services/picOne.png";
function SectionTwo() {
  return (
    <Grid container sx={{mb:10}} rowGap={4}>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        md={6}
        xs={12}
      >
        <img style={{ width: "80%" }} src={ImageOne} alt="" />
      </Grid>
      <Grid item md={6} xs={12}>
        <Stack direction={"column"} gap={2}>
          <Typography variant={"body2"} color={"grey"}>
            Our Services
          </Typography>
          <Typography width={"90%"} variant={"h4"}>Prior Authorization Services</Typography>
          <Typography width={"90%"} variant={"body1"}>
            Bright Health Care Solutions provide prior authorization services as our goal is to get your work burden reduced by leaving all the hectic work to our experts.
          </Typography>
          <Typography width={"90%"} variant={"body1"}>
            Prior authorization is usually required if you need a complex treatment or prescription.
Coverage will not happen without it. That’s why beginning the prior authorization process early is important. Our Experts are here to get the prior authorization
          </Typography>
          <Typography width={"90%"} variant={"body1"}>
            done so you don’t must do the messy work and can deal with your patients in a smooth and timely manner.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionTwo;
