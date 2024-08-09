import { Box, Grid, Stack, Typography } from "@mui/material";
import ImageOne from "../../../../assets/Home/Photos/imageSix.png";
function SectionTwo() {
  return (
    <Grid container sx={{ mb: 10 }} rowGap={4}>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        md={6}
        xs={12}
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
      <Grid item md={6}
        xs={12}>
        <Stack direction={"column"} gap={2}>
          <Typography variant={"body2"} color={"grey"}>
            Our Services
          </Typography>
          <Typography
            width={{ xs: '100%', md: '90%' }}
            variant="h3"
          >
            Medical Billing Services
          </Typography>
          <Typography
            width={{ xs: '100%', md: '90%' }}
            variant="body1"
          >
            A knowledgeable medical biller can optimize revenue performance for the physician practice or healthcare organization.
          </Typography>
          <Typography
            width={{ xs: '100%', md: '90%' }}
            variant="body1"
          >
            Our Expert medical billers will make sure that you will be reimbursed at the maximum, and we will manage your account. We will also provide you with the best medical billing services.
          </Typography>
          <Typography
            width={{ xs: '100%', md: '90%' }}
            variant="body1"
          >
            Medical billing is the process of generating healthcare claims to submit to insurance companies for the purpose of obtaining payment for medical
            services rendered by providers and provider organizations. After translating a healthcare service into a billing claim, the medical biller follows
            the claim to ensure the organization receives reimbursement for the work the provider performed
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionTwo;
