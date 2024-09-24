import { Grid } from "@mui/material";
import Cards from "../Cards";
import MainOne from "../../../../assets/Home/Services/main1.png";
import MainSvgOne from "../../../../assets/Home/Services/mainSvg1.svg";
import MainTwo from "../../../../assets/Home/Services/main2.png";
import MainSvgTwo from "../../../../assets/Home/Services/mainSvg2.svg";
import MainThree from "../../../../assets/Home/Services/main3.png";
import MainSvgThree from "../../../../assets/Home/Services/mainSvg3.svg";
import MainFour from "../../../../assets/Home/Services/main4.png";
import MainSvgFour from "../../../../assets/Home/Services/mainSvg4.svg";
function CardsGrid() {
  
  const ArrayData = [
    {
      imgOne: MainOne,
      imgTwo: MainSvgOne,
      url: '/authorizationservices',
      title: "Prior Authorization Services",
      para: "Claim Crest Medical Billing Solutions offers comprehensive prior authorization services to ensure timely approvals for necessary medical treatments. Our expert team works diligently to navigate the complex insurance requirements, reducing delays and ensuring your patients receive the care they need without administrative hassles.",
    },
    {
      imgOne: MainTwo,
      imgTwo: MainSvgTwo,
      url: '/medicalbilling',
      title: "Medical Billing Services",
      para: "Our experienced medical billing specialists optimize revenue performance for healthcare providers by accurately processing claims and reducing denials. We utilize advanced billing techniques and stay up-to-date with industry regulations, ensuring your practice maximizes reimbursement while maintaining compliance with all healthcare billing standards.",
    },
    {
      imgOne: MainThree,
      imgTwo: MainSvgThree,
      url: '/recoveryservice',
      title: "AR Recovery Services",
      para: "Claim Crest Medical Billing Solutions has a dedicated AR recovery team focused on ensuring every outstanding claim is resolved efficiently. We specialize in recovering aged accounts receivable, minimizing write-offs, and improving your cash flow, enabling your practice to maintain financial stability and profitability.",
    },
    {
      imgOne: MainFour,
      imgTwo: MainSvgFour,
      url: '/enrollment',
      title: "Provider Enrollment Services",
      para: "Our provider enrollment services streamline the enrollment process for Medicare and commercial payers, allowing you to focus on patient care. Our contracting experts handle all aspects of the enrollment, from application submission to follow-up, ensuring your practice is credentialed quickly and efficiently.",
    },
  ];
  return (
    <Grid container justifyContent={"center"} rowGap={2}>
      {ArrayData.map((e, i) => (
        <Grid item sx={{ paddingInline: 1 }} key={i} xs={12} sm={6} lg={3}>
          <Cards CardsData={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;
