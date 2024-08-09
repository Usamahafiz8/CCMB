import { Grid } from "@mui/material";
import Cards from "../Cards";
import ImageOne from "../../../../../../../assets/Home/Photos/imageOne.png";
import ImageOne1 from "../../../../../../../assets/Home/Banner/medicalBillingBanner3.jfif";
import ImageThree from "../../../../../../../assets/Home/Banner/medicalBillingBanner.webp";
import ImageFour from "../../../../../../../assets/Home/Photos/imageFour.png";
import ImageFive from "../../../../../../../assets/Home/Banner/medicalBilling.webp";
import ImageSix from "../../../../../../../assets/Home/Photos/imageSix.jfif"
function CardsGrid() {
  const ArrayData = [
    {
      img: ImageOne,
    },
    {
      img: ImageOne1,
    },
    {
      img: ImageThree,
    },
    {
      img: ImageFour,
    },
    {
      img: ImageFive,
    },
    {
      img: ImageSix,
    },
  ];
  return (
    <Grid container>
      {ArrayData.map((e, i) => (
        <Grid
          item
          sx={{ paddingInline: 1, paddingBlock: 1 }}
          key={i}
          xs={12}
          sm={6}
          lg={4}
        >
          <Cards CardsData={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;
