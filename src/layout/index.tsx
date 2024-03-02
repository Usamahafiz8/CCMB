import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useWindowWidth from "../hook/useWindowWidth";
import ResponsiveNavbar from "./Navbar/components/ResponsiveNavbar";
import FloatingButtons from "../components/MUI/FloatingButtons";
import { Chat } from "@mui/icons-material";

function Layout() {
  const windowWidth = useWindowWidth();
  return (
    <Grid container>
      <Grid item xs={12}>
        {windowWidth < 900 ? <ResponsiveNavbar /> : <Navbar />}
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      <Grid sx={{mb:-12}} item xs={12}>
        <Footer />
      </Grid>
      <Grid item style={{ position: "sticky", bottom: 30, display:"flex", justifyContent:"flex-end", alignItems:"center",zIndex:"12" }} xs={12}>
        <FloatingButtons sx={{mr:4, zIndex:"12"}} ><Chat/></FloatingButtons>
      </Grid>
    </Grid>
  );
}

export default Layout;
