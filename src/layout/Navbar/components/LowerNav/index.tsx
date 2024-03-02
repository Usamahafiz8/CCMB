import { Grid, Menu, MenuItem, Stack, Typography, styled } from "@mui/material";
import LogoSvg from "../../../../assets/Logo.svg";
import Buttons from "../../../../components/MUI/Buttons";
import { useNavigate } from "react-router";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
const GridStyled = styled(Grid)(({}) => ({}));
function LowerNav() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleHoverIn = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHoverClose = () => {
    setAnchorEl(null);
  };
  const ArrayData = [
    {
      name: "Home",
      // icon: <Home />,
      url: "/",
    },
    // {
    //   name: "About",
    //   icon: <Info />,
    //   url: "/about",
    // },
    {
      name: "Services",
      // icon: <MedicalServices />,
      url: "/services",
      children: true,
    },
    {
      name: "Specialities",
      // icon: <Star />,
      url: "/specialities",
    },
    {
      name: "Request Demo",
      // icon: <BubbleChart />,
      url: "/demo",
    },
    {
      name: "Pricing",
      // icon: <PriceChange />,
      url: "/pricing",
    },
    {
      name: "Contact Us",
      // icon: <Mail />,
      url: "/contact",
    },
  ];
  return (
    <GridStyled container>
      <Grid item xs={2}>
        <img src={LogoSvg} height={"60px"} alt="" />
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={8}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          {ArrayData?.map((e, i) =>
            e?.children ? (
              <Stack direction={"row"} alignItems={"center"} gap={0}>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleHoverClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleHoverClose();
                      navigate("/services");
                    }}
                  >
                    Our Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleHoverClose();
                      navigate("/authorizationservices");
                    }}
                  >
                    Prior Authorization Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleHoverClose();
                      navigate("/medicalbilling");
                    }}
                  >
                    Medical Billing Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleHoverClose();
                      navigate("/recoveryservice");
                    }}
                  >
                    AR Recovery Services
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleHoverClose();
                      navigate("/enrollment");
                    }}
                  >
                    Provider Enrollment Services
                  </MenuItem>
                </Menu>
                <Typography
                  onClick={handleHoverIn}
                  sx={{ cursor: "pointer" }}
                  key={i}
                  fontWeight={600}
                  variant={"body2"}
                >
                  {e?.name}
                </Typography>
                <KeyboardArrowDown sx={{ fontSize: "1.2rem" }} />
              </Stack>
            ) : (
              <Typography
                onClick={() => navigate(e?.url)}
                sx={{ cursor: "pointer" }}
                key={i}
                fontWeight={600}
                variant={"body2"}
              >
                {e?.name}
              </Typography>
            )
          )}
        </Stack>
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        xs={2}
      >
        <Buttons>Make a Call</Buttons>
      </Grid>
    </GridStyled>
  );
}

export default LowerNav;
