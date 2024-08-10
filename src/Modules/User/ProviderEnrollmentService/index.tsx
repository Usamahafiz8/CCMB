import { Grid, Stack, Typography, styled } from "@mui/material";
import Buttons from "../../../components/MUI/Buttons";
import SectionTwo from "./SectionTwo";
import useWindowWidth from "../../../hook/useWindowWidth";
import { useNavigate } from "react-router";
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
function ProviderEnrollmentService() {
  const windowWidth = useWindowWidth();

  const  naviaget = useNavigate()

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
          <Typography color={"black"} style={{textAlign: "center"}}  fontWeight={600} variant={windowWidth < 900 ? "h3" : "h2"}>
            Provider Enrollment Services
          </Typography>
          <Typography fontWeight={500} style={{textAlign: "center"}} variant={"body1"}>
            Auto Paladium is the first impression & the final touch of any event
          </Typography>
          <Buttons onClick={()=>{naviaget("/demo")}}>Request a Demo</Buttons>
        </Stack>
      </GridStyled>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        item
        xs={12}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: { xs: '90%', sm: '90%', md: '60%' },  height: "100%", paddingBlock: 8 }}
          direction={"column"}
          gap={2}
        >
          <Typography textAlign={"center"} fontWeight={400} variant={"body1"}>
            Auto Paladium is the first impression & the final touch of any event
          </Typography>
          <Typography
            textAlign={"center"}
            color={"black"}
            fontWeight={600}
            variant={"h4"}
          >
            We are the Best solution for your event parking
          </Typography>
          <Typography textAlign={"center"} fontWeight={400} variant={"body1"}>
            Valet Parking is the first impression & the final touch of any
            event. Call us today for a FREE estimate for your private event or
            party. We’d love to discuss all the details with you and answer any
            questions you may have. We can provide you with the best valet
            service at competitive prices.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={11}>
        <SectionTwo />
      </Grid>
    </Grid>
  );
}

export default ProviderEnrollmentService;
