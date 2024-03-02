import { Call, Facebook, Home, Instagram, LinkedIn } from "@mui/icons-material";
import { Divider, Grid, Stack, Typography, styled } from "@mui/material";
const DataArrayOne = [
  {
    title: "Call For Serial: 123456789",
    icons: <Call sx={{ color: "white" }} />,
  },
  {
    title: "G-2,G-3, (Ground Floor) BTI Centara Grand.",
    icons: <Home sx={{ color: "white" }} />,
  },
];
const DataArrayTwo = [
  {
    title: "Facebook",
    icons: <Facebook sx={{ color: "white" }} />,
  },
  {
    title: "Instagram",
    icons: <Instagram sx={{ color: "white" }} />,
  },
  {
    title: "LinkedIn",
    icons: <LinkedIn sx={{ color: "white" }} />,
  },
];
const GridStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingBlock: theme.spacing(1),
}));
function UpperNav() {
  return (
    <GridStyled container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={6} display={"flex"} flexDirection={"row"} gap={2}>
        {DataArrayOne?.map((e, i) => (
          <>
            <Stack
              key={i}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
            >
              {e?.icons}
              <Typography
                color={"white"}
                variant={"caption"}
                fontWeight={500}
              >
                {e?.title}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
          </>
        ))}
      </Grid>
      <Grid
        item
        xs={5}
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        paddingInline={2}
        justifyContent={"flex-end"}
      >
        {DataArrayTwo?.map((e, i) => (
          <>
            <Stack
              key={i}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
            >
              {e?.icons}
              <Typography color={"white"} variant={"caption"} fontWeight={500}>
                {e?.title}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
          </>
        ))}
      </Grid>
    </GridStyled>
  );
}

export default UpperNav;
