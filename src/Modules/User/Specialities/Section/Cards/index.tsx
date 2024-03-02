import { Card, Stack, Typography } from "@mui/material";
function Cards({data}:any) {
  return (
    <Card sx={{ margin: 1, paddingBlock: 3 }} elevation={4}>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} gap={1}>
        <img src={data.icon} style={{ width: "30px" }} alt="" />
        <Typography variant={"body1"} fontWeight={600}>
          {data.title}
        </Typography>
      </Stack>
    </Card>
  );
}

export default Cards;
