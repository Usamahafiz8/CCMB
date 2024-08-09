import { Grid, Typography } from "@mui/material";
import FormDemo from "./FormDemo";
import useWindowWidth from "../../../hook/useWindowWidth";
function Demo() {
  const windowWidth = useWindowWidth();

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        xs={11}
        sx={{ height: "300px", p: 3 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant={"body1"} color={"grey"}>
          Book A Call
        </Typography>
        <Typography fontWeight={600} variant={windowWidth < 1200 ? "h5" : "h4"}>
          Request A Demo
        </Typography>
        <Typography textAlign={"center"} variant={"body2"}>
          Let us help with you with any of your questions and how we operate.
        </Typography>
      </Grid>
      <Grid item sx={{ mt: -16 }} width={"95%"} xs={11}>
        <FormDemo />
      </Grid>
    </Grid>
  );
}

export default Demo;
