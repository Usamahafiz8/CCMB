import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Grid, IconButton, Stack, TextField, Typography, styled } from "@mui/material";
import { facebookUrl , instagramUrl , linkedinUrl } from "../../../../Navbar/components/UpperNav/SocialMediaUrls";
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
          Connect to SocialMedia 
        </Typography>
      </Grid>
      {/* <Grid item xs={12}>
        <Stack direction={"row"}>
          <WhiteBorderTextField label="Your Email" />
        </Stack>
      </Grid> */}
      <Grid item display={"flex"} alignItems={"center"} gap={2} xs={12}>
      <IconButton href={facebookUrl} target="_blank" aria-label="Facebook">
          <Facebook sx={{ color: "white" }} />
        </IconButton>
        <IconButton href={instagramUrl} target="_blank" aria-label="Instagram">
          <Instagram sx={{ color: "white" }} />
        </IconButton>
        <IconButton href={linkedinUrl} target="_blank" aria-label="LinkedIn">
          <LinkedIn sx={{ color: "white" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default NewsLetter;
