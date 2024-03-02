import { Grid, styled } from "@mui/material";
import BackgroundImage from "../../../../../assets/Home/mission/background.png";
import DoctorImage from "../../../../../assets/Banner2.png";
import Section from "./Section";
import useWindowWidth from "../../../../../hook/useWindowWidth";
const GridStyled = styled(Grid)(({ theme }) => ({
  minHeight: "500px",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
function MissionVision() {
  const windowWidth = useWindowWidth();
  const DataSection = [
    {
      title: "Our Vision",
      content:
        "At the heart of our ethos is an unwavering dedication to providing Affordable, Best, and Trusted Medical Billing Services for your practice.",
    },
    {
      title: "Our Mission",
      content:
        "To transform as a prestigious organization which is focused on delivering refined and innovative services to its customers and partners, to optimize their processes and help them to reach their goals.",
    },
  ];
  return (
    <GridStyled container>
      <Grid
        display={"flex"}
        direction={windowWidth > 900 ? "row" : "column"}
        justifyContent={"center"}
        alignItems={windowWidth > 900 ? "stretch" : "center"}
        item
        xs={12}
        md={8}
      >
        {DataSection?.map((e, i) => (
          <Section key={i} content={e} />
        ))}
      </Grid>
      <Grid
        item
        display={windowWidth < 900 ? "none" : "flex"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        xs={4}
      >
        <img
          src={DoctorImage}
          style={{ width: "100%", marginBottom: "-60px" }}
          alt=""
        />
      </Grid>
    </GridStyled>
  );
}

export default MissionVision;
