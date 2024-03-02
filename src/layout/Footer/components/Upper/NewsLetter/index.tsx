import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Grid, Stack, TextField, Typography, styled } from "@mui/material";
const WhiteBorderTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "& input::placeholder": {
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});
function NewsLetter() {
  return (
    <Grid container gap={5}>
      <Grid item xs={12}>
        <Typography variant={"body2"} fontWeight={600}>
          Join a NewsLetter
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"row"}>
          <WhiteBorderTextField label="Your Email" />
        </Stack>
      </Grid>
      <Grid item display={"flex"} alignItems={"center"} gap={2} xs={12}>
        <Facebook />
        <Instagram />
        <LinkedIn />
      </Grid>
    </Grid>
  );
}

export default NewsLetter;
