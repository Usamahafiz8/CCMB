import { Card, Grid, Stack, Typography } from "@mui/material";
import Buttons from "../../../../../../../components/MUI/Buttons";

function Cards({ CardsData }: any) {
  return (
    <Card
      elevation={4}
      sx={{ height: "100%", width: "100%", paddingBlock: 3, paddingInline: 2 }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <img src={CardsData.img} style={{ width: "40px" }} alt="" />
            <Typography
              variant={"body1"}
              fontWeight={600}
              color={"primary.main"}
            >
              {CardsData.title}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body2"} textAlign={"center"}>
            {CardsData.para}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Buttons backgroundBtn={"#F3F7FD"} colorBtn={"black"} fullWidth>
            Actions
          </Buttons>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;

