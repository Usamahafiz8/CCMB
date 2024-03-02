import { Menu } from "@mui/icons-material";
import { Drawer, Grid, IconButton } from "@mui/material";
import LogoSvg from "../../../../assets/Logo.svg";
import { useState } from "react";
import DrawerContent from "./DrawerContent";
function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingBlock: 2, backgroundColor: "white" }}
    >
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        item
        xs={11}
      >
        <img src={LogoSvg} height={"60px"} alt="" />
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <DrawerContent toggleDrawer={toggleDrawer} />
        </Drawer>
      </Grid>
    </Grid>
  );
}

export default ResponsiveNavbar;
