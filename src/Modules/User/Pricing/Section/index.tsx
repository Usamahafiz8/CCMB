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
      title: "Free Trail",
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
      title: "$2.99",
      subtitle: "month",
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
      title: "Deluxe",
      subtitle: "contact us",
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
    <GridStyled container rowGap={4}>
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
          sx={{ width: "70%", height: "100%" }}
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
            We are the Best solution for your Medical Billing
          </Typography>
          <Typography textAlign={"center"} fontWeight={500} variant={"body1"}>
            We have plans for your every need. We offer the best bang for the
            buck with our quality services and reasonable pricing structure.
            Once we start working for you, you won’t even feel the cost as our
            pricing is so minimal compared to the medical revenue increase that
            we provide.
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
