import { Grid , Stack, Typography, styled } from "@mui/material";
import ImageBg from "../../../../../assets/Banner.png";
import ImageCircle from "../../../../../assets/BannerCircle.svg";
import ImageGirl from "../../../../../assets/Banner2.png";
// import DentistSvg from "../../../../../assets/Home/Banner/professionalDentists.svg";
import medicalBilling from "../../../../../assets/Home/Banner/medicalBilling.webp";
import medicalBillingBanner from "../../../../../assets/Home/Banner/medicalBillingBanner.webp";
import medicalBillingBanner3 from "../../../../../assets/Home/Banner/medicalBillingBanner3.jfif";


// import TopLevelSvg from "../../../../../assets/Home/Banner/topLevel.svg";
// import ServicesSvg from "../../../../../assets/Home/Banner/professionalServices.svg";
import Buttons from "../../../../../components/MUI/Buttons";
import useWindowWidth from "../../../../../hook/useWindowWidth";
import { useNavigate } from "react-router";
interface ArrayData {
  title: string;
  icon: string;
}
const GridStyled = styled(Grid)(({}) => ({
  minHeight: "700px",
  background: `url(${ImageBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
}));
function Banner() {
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();
  const ArrayData: ArrayData[] = [
    {
      title: "Expert Medical Billing",
      icon: medicalBilling,
    },
    {
      title: "Premier Billing Solutions",
      icon: medicalBillingBanner,
    },
    {
      title: "Professional Billing Services",
      icon: medicalBillingBanner3,
    },
  ];
  return (
    <GridStyled
      container
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
    >
      <img
        src={ImageCircle}
        style={{
          position: "absolute",
          height: "110%",
          top: "0%",
          animation: "spin 60s linear infinite",
          display: windowWidth < 1200 ? "none" : "block",
        }}
        alt=""
      />
      <img
        src={ImageGirl}
        style={{
          position: "absolute",
          height: "85%",
          bottom: "0%",
          display: windowWidth < 1200 ? "none" : "block",
        }}
        alt=""
      />
      <Grid item sx={{ height: "100%", zIndex: "3" }} md={12} lg={6}>
        <Stack direction={"row"}>
          <Stack
            direction={"column"}
            alignItems={windowWidth < 1200 ? "center" : "flex-start"}
            gap={3}
            sx={{
              // ml: windowWidth < 1200 ? 5 : 0,
              // mt: windowWidth < 1200 ? 3 : 0,
            }}
          >
            <Typography
              textAlign={windowWidth < 1200 ? "center" : "left"}
              variant={windowWidth < 1200 ? "h4" : "h3"}
              fontWeight={600}
              color={"primary.main"}
            >
              Welcome To
            </Typography>
            <Typography
              textAlign={windowWidth < 1200 ? "center" : "left"}
              fontWeight={500}
              variant={windowWidth < 1200 ? "h4" : "h2"}
            >
              Claim Crest
            </Typography>
            <Typography
              textAlign={windowWidth < 1200 ? "center" : "left"}
              fontWeight={500}
              sx={{ mt: -4 }}
              variant={windowWidth < 1200 ? "h4" : "h2"}
            
            >
              Medical Billing
            </Typography>
            <Typography
              textAlign={windowWidth < 1200 ? "center" : "left"}
              variant={windowWidth < 1200 ? "body1" : "caption"}
              width={windowWidth < 1200 ? "80%" : "40%"}
            >
              We Redefine the status of the medical billing industry by offering
              seamless Revenue Cycle Management Services, Let’s get your net
              patient revenue increase by leaving billing to the experts.
            </Typography>
            <Buttons onClick={()=>navigate("/contact")}>Contact Us</Buttons>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="center"
        sx={{ height: "100%", zIndex: "3" }}
        xs={5}
      >
        <Stack
          sx={{ display: windowWidth < 1200 ? "none" : "flex" }}
          direction={"column"}
          paddingLeft={12}
          gap={2}
        >
          {ArrayData.map((e, i) => (
            <Stack
              key={i}
              direction={"row"}
              ml={i === 1 ? 4 : i === 2 ? -1 : 0}
              alignItems={"center"}
              gap={1}
            >
              <img width={"60px"} height={'60px'} style={{ borderRadius: "100%" }} src={e.icon} alt="" />
              <Typography variant={"body1"} fontWeight={600}>
                {e.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid> 
    </GridStyled>
  );
}

export default Banner;











// import { Box, Grid , Stack, Typography, styled } from "@mui/material";
// import ImageBg from "../../../../../assets/Banner.png";
// import ImageCircle from "../../../../../assets/BannerCircle.svg";
// import ImageGirl from "../../../../../assets/Banner2.png";
// // import DentistSvg from "../../../../../assets/Home/Banner/professionalDentists.svg";
// import medicalBilling from "../../../../../assets/Home/Banner/medicalBilling.webp";
// import medicalBillingBanner from "../../../../../assets/Home/Banner/medicalBillingBanner.webp";
// import medicalBillingBanner3 from "../../../../../assets/Home/Banner/medicalBillingBanner3.jfif";


// // import TopLevelSvg from "../../../../../assets/Home/Banner/topLevel.svg";
// // import ServicesSvg from "../../../../../assets/Home/Banner/professionalServices.svg";
// import Buttons from "../../../../../components/MUI/Buttons";
// import useWindowWidth from "../../../../../hook/useWindowWidth";
// import { useNavigate } from "react-router";
// interface ArrayData {
//   title: string;
//   icon: string;
// }
// const GridStyled = styled(Grid)(({}) => ({
//   minHeight: "500px",
//   background: `url(${ImageBg})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   width: "100%",
// }));
// function Banner() {
//   const windowWidth = useWindowWidth();
//   const navigate = useNavigate();
//   const ArrayData: ArrayData[] = [
//     {
//       title: "Expert Medical Billing",
//       icon: medicalBilling,
//     },
//     {
//       title: "Premier Billing Solutions",
//       icon: medicalBillingBanner,
//     },
//     {
//       title: "Professional Billing Services",
//       icon: medicalBillingBanner3,
//     },
//   ];
//   return (
//     <Box sx={{ height:'100vh'}} >

//     <GridStyled
//       container
//       position={"relative"}
//       justifyContent={"center"}
//       alignItems={"center"}
//       overflow={"hidden"}
//       sx={{
//         minHeight:"90vh"
//       }}
//       >
//       <img
//         src={ImageCircle}
//         style={{
//           position: "absolute",
//           height: "95%",
//           top: "5%",
//           animation: "spin 40s linear infinite",
//           display: windowWidth < 1200 ? "none" : "block",
//         }}
//         alt=""
//         />
//       <img
//         src={ImageGirl}
//         style={{
//           position: "absolute",
//           height: "75%",
//           bottom: "0%",
//           display: windowWidth < 1200 ? "none" : "block",
//         }}
//         alt=""
//         />
//       <Grid item sx={{ height: "100%", zIndex: "3" }} md={12} lg={6}>
//         <Stack direction={"row"}>
//           <Stack
//             direction={"column"}
//             alignItems={windowWidth < 1200 ? "center" : "flex-start"}
//             gap={3}
//             sx={{
//               // ml: windowWidth < 1200 ? 5 : 0,
//               // mt: windowWidth < 1200 ? 3 : 0,
//             }}
//             >
//             <Typography
//               textAlign={windowWidth < 1200 ? "center" : "left"}
//               variant={windowWidth < 1200 ? "h4" : "h3"}
//               fontWeight={600}
//               color={"primary.main"}
//               >
//               Welcome To
//             </Typography>
//             <Typography
//               textAlign={windowWidth < 1200 ? "center" : "left"}
//               fontWeight={500}
//               variant={windowWidth < 1200 ? "h4" : "h2"}
//               >
//               Claim Crest
//             </Typography>
//             <Typography
//               textAlign={windowWidth < 1200 ? "center" : "left"}
//               fontWeight={500}
//               sx={{ mt: -4 }}
//               variant={windowWidth < 1200 ? "h4" : "h2"}
              
//               >
//               Medical Billing
//             </Typography>
//             <Typography
//               textAlign={windowWidth < 1200 ? "center" : "left"}
//               variant={windowWidth < 1200 ? "body1" : "caption"}
//               width={windowWidth < 1200 ? "80%" : "40%"}
//               >
//               We Redefine the status of the medical billing industry by offering
//               seamless Revenue Cycle Management Services, Let’s get your net
//               patient revenue increase by leaving billing to the experts.
//             </Typography>
//             <Buttons onClick={()=>navigate("/contact")}>Contact Us</Buttons>
//           </Stack>
//         </Stack>
//       </Grid>
//       <Grid
//         item
//         display="flex"
//         justifyContent="center"
//         sx={{ height: "100%", zIndex: "3" }}
//         xs={5}
//         >
//         <Stack
//           sx={{ display: windowWidth < 1200 ? "none" : "flex" }}
//           direction={"column"}
//           paddingLeft={12}
//           gap={2}
//           >
//           {ArrayData.map((e, i) => (
//             <Stack
//             key={i}
//             direction={"row"}
//             ml={i === 1 ? 4 : i === 2 ? -1 : 0}
//             alignItems={"center"}
//             gap={1}
//             >
//               <img width={"80px"} height={"80px"} style={{ borderRadius: "100%", borderColor:"black", border:"20px"  }} src={e.icon} alt="" />
//               <Typography variant={"body1"} fontWeight={600}>
//                 {e.title}
//               </Typography>
//             </Stack>
//           ))}
//         </Stack>
//       </Grid> 
//     </GridStyled>
//           </Box>
//   );
// }

// export default Banner;
