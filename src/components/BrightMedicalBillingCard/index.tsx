import { Card, Stack, Typography } from "@mui/material";
import ImageMap from "../../assets/map.png";
function BrightMedicalBillingCard() {
  return (
    <Card sx={{ paddingBlock: 3, paddingInline: 2, height:"100%" }}>
      <Stack direction={"column"} justifyContent={"flex-start"} gap={2}>
        <Typography color={"primary.main"} fontWeight={600} variant={"h4"}>
          Claim Crest Medical Billing
        </Typography>
        <Typography variant={"body2"}>
          G-2,G-3, (GROUND FLOOR) BTI Centara Grand. 144, 144/1, Green Road USA
        </Typography>
        <img src={ImageMap} alt="" />
      </Stack>
    </Card>
  );
}

export default BrightMedicalBillingCard;
