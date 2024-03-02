import { Card, Stack, Typography } from "@mui/material";

function Cards({ CardsData }: any) {
  return (
    <Card
      elevation={2}
      sx={{ height: "100%", width: "100%", paddingBlock: 3, paddingInline: 2 }}
    >
      <Stack sx={{ height: "100%", width: "100%" }} direction={"column"}>
        <img src={CardsData.imgOne} style={{ width: "100%" }} alt="" />
        <img
          src={CardsData.imgTwo}
          style={{ width: "40px", marginTop: "-20px" }}
          alt=""
        />
        <Typography variant="h5" sx={{ mb: 1 }} fontWeight={500}>
          {CardsData.title}
        </Typography>
        <Typography variant="body2">{CardsData.para}</Typography>
      </Stack>
    </Card>
  );
}

export default Cards;
