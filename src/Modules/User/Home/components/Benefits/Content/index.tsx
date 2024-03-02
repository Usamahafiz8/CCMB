import { Grid, Stack, Typography } from "@mui/material";
import Buttons from "../../../../../../components/MUI/Buttons";
import useWindowWidth from "../../../../../../hook/useWindowWidth";

function Content() {
  const windowWidth = useWindowWidth();
  const ArrayList: string[] = [
    "Real-time claim settlement",
    "Quick accounts receivable",
    "Optimize revenue cycle results",
    "Decrease claim denials",
    "Boost cash flow chain",
    "Out of office billing encounters",
  ];
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Typography variant={"h5"} fontWeight={600} color={"primary.main"}>
          Benefits
        </Typography>
      </Grid>
      <Grid item marginTop={-2} xs={12}>
        <Typography variant={"h4"} fontWeight={600}>
          Why Choose Us
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"body1"}>
          Our strong sense of identification with client projects means that we
          are constantly striving to provide solutions, even for issues they
          aren’t yet aware of.
        </Typography>
      </Grid>
      <Grid item sx={{ pl: 2 }} xs={12}>
        <ul>
          {ArrayList.map((e, i) => (
            <li key={i}>
              <Typography variant={"body2"}>{e}</Typography>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12}>
        <Buttons>See Full Biography</Buttons>
      </Grid>
      <Grid item marginTop={3} xs={12}>
        <Typography variant={"h5"} fontWeight={600}>
          Follow Me On Social Media
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction={windowWidth < 600 ? "column" : "row"}
          alignItems={"flex-start"}
          gap={2}
        >
          <Buttons>Facebook</Buttons>
          <Buttons backgroundBtn="#CD201F">Youtube</Buttons>
          <Buttons>Linkedin</Buttons>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Content;
