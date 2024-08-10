import { Call, Facebook, Home, Instagram, LinkedIn } from "@mui/icons-material";
import { Divider, Grid, Stack, Typography, styled } from "@mui/material";
import { facebookUrl, instagramUrl, linkedinUrl } from "../UpperNav/SocialMediaUrls";
import React from "react";

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
    // title: "Facebook",
    url: facebookUrl,
    icon: <Facebook sx={{ color: "white" }} />,
  },
  // {
    // title: "Instagram",
    // url: instagramUrl,
    // icon: <Instagram sx={{ color: "white" }} />,
  // },
  {
    // title: "LinkedIn",
    url: linkedinUrl,
    icon: <LinkedIn sx={{ color: "white" }} />,
  },
];

const GridStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingBlock: theme.spacing(1),
}));

const LinkWrapper = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  textDecoration: 'none',
  gap: theme.spacing(1),
  '&:hover': {
    textDecoration: 'none', 
  },
}));

function UpperNav() {
  return (
    <GridStyled container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={6} display={"flex"} flexDirection={"row"} gap={2}>
        {DataArrayOne?.map((e, i) => (
          <React.Fragment key={i}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
              {e?.icons}
              <Typography color={"white"} variant={"caption"} fontWeight={500}>
                {e?.title}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
          </React.Fragment>
        ))}
      </Grid>
      <Grid item xs={5} display={"flex"} flexDirection={"row"} gap={1} paddingInline={2} justifyContent={"flex-end"}>
        {DataArrayTwo?.map((e, i) => (
          <React.Fragment key={i}>
            <LinkWrapper href={e.url} target="_blank" rel="noopener noreferrer">
              {e?.icon}
              {/* <Typography color={"white"} variant={"caption"} fontWeight={500}> */}
                {/* {e?.title} */}
              {/* </Typography> */}
            </LinkWrapper>
            <Divider orientation="vertical" flexItem />
          </React.Fragment>
        ))}
      </Grid>
    </GridStyled>
  );
}

export default UpperNav;
