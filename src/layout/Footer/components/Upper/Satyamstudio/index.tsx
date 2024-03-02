import { Stack, Typography } from "@mui/material";
import ImageSvg from "../../../../../assets/Footer/VectorOne.svg";
function Satyamstudio() {
  return (
    <Stack sx={{ height: "100%", width: "100%" }} direction={"column"} gap={4}>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <img src={ImageSvg} style={{ width: "20px", height: "20px" }} alt="" />
        <Typography sx={{ mt: 1 }} fontWeight={600} variant={"body2"}>
          Satyamastudio
        </Typography>
      </Stack>
      <Typography variant={"caption"}>
        OurStudio is a digital agency UI / UX Design and Website Development
        located in Ohio, United States of America
      </Typography>
      <Typography fontWeight={600} variant={"body2"}>
        Copyright Satyam Studio
      </Typography>
    </Stack>
  );
}

export default Satyamstudio;
