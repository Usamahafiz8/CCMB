import { Box, Grid, Stack, Typography } from "@mui/material";
import ImageOne from "../../../../assets/Home/Photos/imageOne.png";
function SectionTwo() {
  return (
    <Grid container sx={{ mb: 10 }} rowGap={4}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component="img"
          sx={{
            width: '80%',
            '@media (max-width:900px)': {
              width: '100%',
            },
          }}
          src={ImageOne}
          alt=""
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction={"column"} gap={2}>
          <Typography variant={"body2"} color={"grey"}>
            Our Services
          </Typography>
          <Typography width={{ xs: '100%', md: '90%' }}variant={"h4"}>Provider Enrollment Services</Typography>
          <Typography width={{ xs: '100%', md: '90%' }} variant={"body1"}>
            Contact us for your Medicare or Commercial payer enrollments with our payer contracting experts.
            Payer enrollment (aka provider enrollment) credentials are specifically used for applying to an insurance panel.
          </Typography>
          <Typography width={{ xs: '100%', md: '90%' }} variant={"body1"}>
            Medical credentialing is a repository of information to verify the valid status of a healthcare practice and each of its members.</Typography>
          <Typography width={{ xs: '100%', md: '90%' }}variant={"body1"}>
            Medical Credentialing is the exhaustive process by which background, education, identity, residency, licensing, and other criteria are verified.
          </Typography>
          <Typography width={{ xs: '100%', md: '90%' }} variant={"body1"}>
            Medical credentialing and physician credentialing are terms that are sometimes used interchangeably, but medical credentialing applies to any professional
            who administers care: physicians, therapists, nurses, radiologists, etc.?</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionTwo;
