import { Grid, styled } from "@mui/material";
import ImageBg from "../../../../../assets/Home/Benefits/backgroundImage.png";
import ImageDoc from "../../../../../assets/Home/Benefits/istockphoto-1319031310-612x612 1.png";
import Content from "./Content";
import useWindowWidth from "../../../../../hook/useWindowWidth";
const GridStyled = styled(Grid)(({ theme }) => ({
  minHeight: "600px",
  backgroundImage: `url(${ImageBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingBlock: theme.spacing(4),
}));
function Benefits() {
  const windowWidth = useWindowWidth();
  return (
    <GridStyled container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={11} lg={6}>
        <Content />
      </Grid>
      <Grid
        item
        xs={5}
        display={windowWidth < 1200 ? "none" : "flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <img src={ImageDoc} width={"90%"} alt="" />
      </Grid>
    </GridStyled>
  );
}

export default Benefits;
