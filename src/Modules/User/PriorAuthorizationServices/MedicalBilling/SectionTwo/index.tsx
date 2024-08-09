import { Box, Grid, Stack, Typography } from "@mui/material";
import ImageOne from "../../../../assets/Services/picOne.png";
function SectionTwo() {
  const listData = [
    "Wedding Valet Parking",
    "Private Party Valet Parking",
    "Private Dinner Valet Parking",
    "Fundraiser Valet Parking",
    "Other Special Events",
  ];
  return (
    <Grid container sx={{ mb: 10 }}>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={6}
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
      <Grid item xs={6}>
        <Stack direction={"column"} gap={2}>
          <Typography variant={"body2"} color={"grey"}>
            Our Services
          </Typography>
          <Typography variant={"h3"}>AR Recover Services</Typography>
          <Typography variant={"body1"}>
            Valet parking for your special event is the mark of a gracious host,
            but more often than not is a necessity. Valet parking can:
          </Typography>
          <ul style={{ marginLeft: "20px" }}>
            {listData.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
          <Typography variant={"body1"}>
            Our parking attendants receive numerous compliments for their
            appearance, friendly service and professionalism. Please feel free
            to call us about your event.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionTwo;
