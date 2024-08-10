import { Card, Stack, Typography } from "@mui/material";

function Cards({ cardsData }: any) {
  return (
    <Card elevation={4} sx={{ marginInline: 2 }}>
      <Stack flexDirection={"column"} alignItems={"stretch"} gap={2}>
        <img src={cardsData?.image} alt="" />
        {cardsData.subtitle ? (
          <Stack
            sx={{ paddingInline: 2, paddingTop: 1 }}
            direction={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Typography fontWeight={600} variant={"h5"}>
              {cardsData.title}/
            </Typography>
            <Typography fontWeight={600} variant={"body1"}>
              {cardsData.subtitle}
            </Typography>
          </Stack>
        ) : (
          <Typography
            fontWeight={600}
            sx={{ paddingInline: 2, paddingTop: 1 }}
            variant={"h5"}
          >
            {cardsData.title}
          </Typography>
        )}

        <ul style={{ paddingLeft: "40px" }}>
          {cardsData?.list?.map((e: string, i: number) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
        {/* <Typography
          variant={"body2"}
          >
          Get Started
          </Typography> */}
<Typography 
          sx={{ paddingInline: 2, paddingBottom: 2 }}
style={{cursor: "pointer" }} fontWeight={500} variant={"body1"}>
            For pricing email us: <b>
               info@claimcrestmb.com
              </b>
          </Typography>
      </Stack>
    </Card>
  );
}

export default Cards;
