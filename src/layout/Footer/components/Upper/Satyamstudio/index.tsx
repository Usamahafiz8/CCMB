import { Stack, Typography } from "@mui/material";
import ImageSvg from "../../../../../assets/Logo.svg";
function Satyamstudio() {
  return (
    <Stack sx={{ height: "100%", width: "100%" }} direction={"column"} gap={4}>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <img src={ImageSvg} style={{ width: "40px", height: "40px" }} alt="" />
        <Typography sx={{ mt: 1 }} fontWeight={600} variant={"body2"}>
          Claim Crest Medical Billing
        </Typography>
      </Stack>
      <Typography variant={"caption"}>
        OurStudio is a digital agency UI / UX Design and Website Development
        located in Ohio, United States of America
      </Typography>
      <Typography fontWeight={600} variant={"body2"}>
        Copyright Calim Crest Medical Billing
      </Typography>
    </Stack>
  );
}

export default Satyamstudio;
