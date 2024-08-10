import { Grid, Stack, Typography, styled } from "@mui/material";
import Cards from "./Cards";

const GridStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(3),
  marginBlock: theme.spacing(4),
}));

function Section() {
  const DataCards = [
    {
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Start Your Free Trial",
      list: [
        "Medical Billing and Coding",
        "Credentialing",
        "A/R Follow Up",
        "24/7 Support",
        "Pre Authorization",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Comprehensive Care Package",
      subtitle: "",
      list: [
        "Medical Billing and Coding",
        "Credentialing",
        "A/R Follow Up",
        "24/7 Support",
        "Pre Authorization",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Premium Support Plan",
      subtitle: "",
      list: [
        "Medical Billing and Coding",
        "Credentialing",
        "A/R Follow Up",
        "24/7 Support",
        "Pre Authorization",
      ],
    },
  ];

  return (
    <GridStyled container rowGap={2}>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: { xs: "90%", sm: "90%", md: "70%" }, height: "100%" }}
          direction={"column"}
          gap={3}
        >
          <Typography
            textAlign={"center"}
            fontWeight={500}
            color={"grey"}
            variant={"body2"}
          >
            Our Pricing
          </Typography>
          <Typography
            color={"black"}
            textAlign={"center"}
            fontWeight={600}
            variant={"h4"}
          >
            We are the Best Solution for Your Medical Billing
          </Typography>
          <Typography textAlign={"center"} fontWeight={500} variant={"body1"}>
            We have plans for your every need. We offer the best value for your
            investment with our quality services and reasonable pricing
            structure. Once we start working for you, you won’t even feel the
            cost as our pricing is so minimal compared to the medical revenue
            increase that we provide.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "70%", height: "100%", marginTop: "15px" }}
          direction={"column"}
          gap={3}
        >
          <Typography
            textAlign={"center"}
            style={{ cursor: "pointer" }}
            fontWeight={500}
            variant={"body1"}
          >
            For More Information: &nbsp;
            <b>info@claimcrestmb.com</b>
          </Typography>
        </Stack>
      </Grid>
      {DataCards?.map((e, i) => (
        <Grid item key={i} xs={12} md={6} lg={4}>
          <Cards cardsData={e} />
        </Grid>
      ))}
    </GridStyled>
  );
}

export default Section;
