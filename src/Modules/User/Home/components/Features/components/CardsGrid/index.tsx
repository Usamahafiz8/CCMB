import { Grid } from "@mui/material";
import Cards from "../Cards";
import ImageOne from "../../../../../../../assets/Home/Features/image1.svg";
import ImageTwo from "../../../../../../../assets/Home/Features/image2.svg";
import ImageThree from "../../../../../../../assets/Home/Features/image3.svg";
import ImageFour from "../../../../../../../assets/Home/Features/image4.svg";
import ImageFive from "../../../../../../../assets/Home/Features/image5.svg";
import ImageSix from "../../../../../../../assets/Home/Features/image6.svg";
import ImageSeven from "../../../../../../../assets/Home/Features/image7.svg";
import ImageEight from "../../../../../../../assets/Home/Features/image8.svg";
function CardsGrid() {
  const ArrayData = [
    {
      img: ImageOne,
      title: "Customized Report",
      para: "Get comprehensive insights into your payment, charges or adjustments trends for every billing entry. provides data reports in easy-to-read format.",
    },
    {
      img: ImageTwo,
      title: "Security",
      para: "Our medical billing software is compliant with HIPAA regulations. We ensure no leakage of patients’ data while processing any info.",
    },
    {
      img: ImageThree,
      title: "Patient Helpdesk",
      para: "Streamline and enhance all patient interactions from scheduling and billing to post-encounter communication with our patient helpdesk.",
    },
    {
      img: ImageFour,
      title: "Follow-up",
      para: "For any denial, BellMedex’s A/R specialists will take swift and effective action to ensure reimbursements, keeping you up-to-date on appeals.",
    },
    {
      img: ImageFive,
      title: "Payment Posting",
      para: "Post ERAs and EOBs in a timely manner as our team of experts verifies each claim for appropriate payment while our A/R team follows up on  denied claim.",
    },
    {
      img: ImageSix,
      title: "Electronic Submit",
      para: "Corrections and re-submissions are completed systematically and in a timely manner for any claims that are held to identify the issue. ",
    },
    {
      img: ImageSeven,
      title: "Charge Entry",
      para: "Get timely reimbursement as our detailed and error-free charge entry process ensures first-time approved claim submission. ",
    },
    {
      img: ImageEight,
      title: "Eligibility Check",
      para: "We confirm every patient’s insurance eligibility to streamline your process, shorten account receivable days, and avoid denials.",
    },
  ];
  return (
    <Grid container>
      {ArrayData.map((e, i) => (
        <Grid item sx={{ paddingInline: 1, paddingBlock: 1 }} key={i} xs={12} sm={6} lg={3}>
          <Cards CardsData={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;
