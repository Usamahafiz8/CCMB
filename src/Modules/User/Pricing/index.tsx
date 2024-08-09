import { Grid, Stack, Typography, styled } from "@mui/material";
import Buttons from "../../../components/MUI/Buttons";
import Section from "./Section";
import useWindowWidth from "../../../hook/useWindowWidth";
const GridStyled = styled(Grid)(({ theme }) => ({
  minHeight: "500px",
  backgroundImage: `url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
function Pricing() {
  const windowWidth = useWindowWidth();

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <GridStyled item xs={12}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "70%", height: "100%" }}
          direction={"column"}
          gap={3}
        >
          <Typography
            color={"black"}
            textAlign={"center"}
            fontWeight={600}
            variant={windowWidth < 900 ? "h4" : "h3"}
          >
            Affordable, Trusted Medical Billing Solutions
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: { xs: "white", md: "black" },
              fontWeight: 500,
            }}
            variant="body1"
          >
            Auto Paladium is the first impression & the final touch of any event
          </Typography>
          <Buttons>Request a Call</Buttons>
        </Stack>
      </GridStyled>
      <Grid item xs={12}>
        <Section />
      </Grid>
    </Grid>
  );
}

export default Pricing;
