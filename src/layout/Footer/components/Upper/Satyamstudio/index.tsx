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
        CCMB is a medical billing company that provides comprehensive medical billing services across the USA. As an LLC, we specialize in managing and optimizing the billing process for healthcare providers, ensuring accurate and timely reimbursements.</Typography>

    </Stack>
  );
}

export default Satyamstudio;
