import { Grid, TextField } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Buttons from "../../MUI/Buttons";
// const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
//   width: "100%",
//   "& .MuiInputLabel-root": {
//     color: "black",
//   },
//   "& .MuiInputBase-input": {
//     color: "black",
//     background: "white",
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     borderColor: "black",
//   },
//   "&:hover .MuiOutlinedInput-notchedOutline": {
//     borderColor: "black",
//   },
//   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     borderColor: "black",
//   },
//   "&.Mui-focused .MuiInputLabel-root": {
//     color: "black",
//   },
//   "& .MuiIconButton-root": {
//     fill: "white", // Set the fill property to make the icon white
//     backgroundColor: "white", // Set the background color of the icon
//   },
// }));
function Form() {
  return (
    <Grid container sx={{ height: "100%" }} gap={2}>
      <Grid item  xs={12} lg={5.8}>
        <TextField
          placeholder={"How can we help?"}
          fullWidth
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: {
              color: "black",
              background: "white",
            },
          }}
        />
      </Grid>
      <Grid item  xs={12} lg={5.8}>
        <TextField
          placeholder={"Email"}
          fullWidth
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: {
              color: "black",
              background: "white",
            },
          }}
        />
      </Grid>
      <Grid item  xs={12} lg={5.8}>
        <TextField
          placeholder={"Name"}
          fullWidth
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: {
              color: "black",
              background: "white",
            },
          }}
        />
      </Grid>
      <Grid item  xs={12} lg={5.8}>
        <TextField
          placeholder={"Number"}
          fullWidth
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: {
              color: "black",
              background: "white",
            },
          }}
        />
      </Grid>
      <Grid item  xs={12} lg={5.8}>
        <TextField
          placeholder={"Date"}
          fullWidth
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: {
              color: "black",
              background: "white",
            },
          }}
        />
      </Grid>
      <Grid item  xs={12} lg={5.8}>
        <Buttons
          sx={{ p: 1.6 }}
          colorBtn={"black"}
          backgroundBtn={"white"}
          fullWidth
        >
          Send
        </Buttons>
      </Grid>
      {/* <Grid item  xs={12} lg={5.8}> */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDatePicker />
        </LocalizationProvider>
      </Grid> */}
    </Grid>
  );
}

export default Form;
