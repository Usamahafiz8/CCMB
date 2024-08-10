import { Grid, Stack, Typography, styled } from "@mui/material";
import Buttons from "../../../components/MUI/Buttons";
import Section from "./Section";
import useWindowWidth from "../../../hook/useWindowWidth";
import { useNavigate } from "react-router";
const GridStyled = styled(Grid)(({ theme }) => ({
  minHeight: "300px",
  backgroundImage: `url(https://images.unsplash.com/photo-1488998527040-85054a85150e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up('lg')]: {
    minHeight: "500px", // Apply 500px minHeight for screens larger than 1200px
  },
}));
const GridContainer = styled(Grid)(({theme})=>({
    backgroundColor:theme.palette.secondary.main
}))
function Specialities() {
  const windowWidth = useWindowWidth();

  const naviaget= useNavigate()

  return (
    <GridContainer container justifyContent={"center"} alignItems={"center"}>
      <GridStyled item xs={12}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", height: "100%" }}
          direction={"column"}
          gap={3}
        >
          <Typography
            textAlign={"center"}
            color={"black"}
            fontWeight={600}
            variant={windowWidth < 1200 ? "h3" : "h2"}
          >
            Specialities
          </Typography>
          <Typography textAlign={"center"} width={"95%"} fontWeight={500} variant={"body1"}>
            Auto Paladium is the first impression & the final touch of any event
          </Typography>
          <Buttons onClick={()=>{naviaget("/demo")}}>Request a Demo</Buttons>
        </Stack>
      </GridStyled>
      <Grid item paddingBlock={4} xs={12}>
        <Section />
      </Grid>
    </GridContainer>
  );
}

export default Specialities;
