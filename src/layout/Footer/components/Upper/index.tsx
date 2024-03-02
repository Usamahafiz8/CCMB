import { Grid } from "@mui/material";
import Satyamstudio from "./Satyamstudio";
import NewsLetter from "./NewsLetter";
import SimpleLinksTwo from "./SimpleLinksTwo";

function Upper() {
  const DataArrayOne: Object[] = [
    { name: "Prior Authorization Services", url: "/authorizationservices" },
    { name: "Medical Billing Services", url: "/medicalbilling" },
    { name: "AR Recovery Services", url: "/recoveryservice" },
    { name: "Provider Enrollment Services", url: "/enrollment" },
  ];
  const ArrayDataTwo = [
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
    <Grid container rowGap={10}>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <Satyamstudio />
      </Grid>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <SimpleLinksTwo
          title={"Services"}
          StringArray={DataArrayOne}
        />
      </Grid>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <SimpleLinksTwo title="Company" StringArray={ArrayDataTwo} />
      </Grid>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <NewsLetter />
      </Grid>
    </Grid>
  );
}

export default Upper;
