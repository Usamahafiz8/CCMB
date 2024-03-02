import { Grid } from "@mui/material";
import Cards from "../Cards";
import ImageOne from "../../../../../../../assets/Home/Photos/imageOne.png";
import ImageTwo from "../../../../../../../assets/Home/Photos/imageTwo.png";
import ImageThree from "../../../../../../../assets/Home/Photos/imageThree.png";
import ImageFour from "../../../../../../../assets/Home/Photos/imageFour.png";
import ImageFive from "../../../../../../../assets/Home/Photos/imageFive.png";
import ImageSix from "../../../../../../../assets/Home/Photos/imageSix.png";
function CardsGrid() {
  const ArrayData = [
    {
      img: ImageOne,
    },
    {
      img: ImageTwo,
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
