import { Card, Stack, Typography } from "@mui/material";
import ImageMap from "../../assets/map.png";
function BrightMedicalBillingCard() {
  return (
    // <Card sx={{ paddingBlock: 3, paddingInline: 2, height:"100%" }}>
    <Stack direction={"column"} justifyContent={"flex-start"} gap={2}>
      <Typography color={"primary.main"} fontWeight={600} variant={"h4"}>
        Claim Crest Medical Billing
      </Typography>
      <Typography variant={"body2"}>
        7900 4th St N STE 300ST
        Petersburg, FL , USA
      </Typography>
    </Stack>

  );
}

export default BrightMedicalBillingCard;
