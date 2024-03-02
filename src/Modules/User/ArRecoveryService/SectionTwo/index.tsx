import { Grid, Stack, Typography } from "@mui/material";
import ImageOne from "../../../../assets/Services/picOne.png";
function SectionTwo() {
  return (
    <Grid container sx={{mb:10}}>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        md={6}
      >
        <img style={{ width: "80%" }} src={ImageOne} alt="" />
      </Grid>
      <Grid item xs={12} md={6} >
        <Stack direction={"column"} gap={2}>
          <Typography variant={"body2"} color={"grey"}>
            Our Services
          </Typography>
          <Typography width={"90%"} variant={"h4"}>AR Recover Services</Typography>
          <Typography width={"90%"} variant={"body1"}>
            Bright Health Care solutions have professional AR recovery team, we make sure every old claim gets processed correctly for maximum payments.
Accounts Receivable (AR) is the money owed to Providers or medical billing companies for the medical care rendered to patients.
          </Typography>
          <Typography width={"90%"} variant={"body1"}>
            
Identifying the root cause for claim denials is one of the important processes in Accounts Receivable management.
          </Typography>
          <Typography width={"90%"} variant={"body1"}>
The staff must be highly skilled to analyze the reason for claim rejection, correct the claims and re-file without delay.
Also, it is essential to examine denial patterns and find proper solutions to eradicate future occurrence of denials.          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionTwo;
