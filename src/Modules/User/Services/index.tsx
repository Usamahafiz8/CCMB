import { Grid, Stack, Typography, styled } from "@mui/material";
import Buttons from "../../../components/MUI/Buttons";
import ServicesCommon from "../../../components/ServicesCommon";
import useWindowWidth from "../../../hook/useWindowWidth";
// import ImageBg from "../../../assets/Services/banner.png";
const GridStyled = styled(Grid)(({ theme }) => ({
  minHeight: "500px",
  backgroundImage: `url(https://images.unsplash.com/photo-1488998527040-85054a85150e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
function Services() {
  const windowWidth = useWindowWidth();
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <GridStyled item xs={12}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", height: "100%" }}
          direction={"column"}
          gap={3}
        >
          <Typography color={"black"} fontWeight={600} variant={ windowWidth < 900 ? "h3" : "h2"}>
            Our Services
          </Typography>
          <Typography fontWeight={500} textAlign={"center"} variant={windowWidth < 900 ? "body2" : "body1"}>
            Auto Paladium is the first impression & the final touch of any event
          </Typography>
          <Buttons>Request a Call</Buttons>
        </Stack>
      </GridStyled>
      <Grid item xs={11} sx={{ paddingBlock: 6 }}>
        <ServicesCommon />
      </Grid>
    </Grid>
  );
}

export default Services;
