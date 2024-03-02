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
        <Typography
          sx={{ paddingInline: 2, paddingBottom: 2 }}
          variant={"body2"}
        >
          Get Started
        </Typography>
      </Stack>
    </Card>
  );
}

export default Cards;
