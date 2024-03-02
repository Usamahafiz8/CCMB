import { Stack, TextField, Typography, styled } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
// Create a styled TextField component
interface CustomTextFieldProps extends Omit<TextFieldProps, "label"> {
  label?: string;
}
const StyledTextField = styled(TextField)<CustomTextFieldProps>(
  ({ theme }) => ({
    backgroundColor: "#E9EDF3",
    "& label.Mui-focused": {
      color: "white", // Change the color of the label when the input is focused
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white", // Change the color of the underline when the input is focused
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E9EDF3", // Change the color of the border when the input is focused
      },
      "&:hover fieldset": {
        borderColor: "#E9EDF3", // Change the color of the border when the input is hovered
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E9EDF3", // Change the color of the border when the input is focused
      },
    },
  })
);

// Create the custom TextField component
const CustomTextField = ({ label, ...props }: CustomTextFieldProps) => {
  return (
    <Stack direction={"column"} gap={1}>
      <Typography variant={"body2"} fontWeight={600}>
        {label}
      </Typography>
      <StyledTextField {...props} variant="outlined" />
    </Stack>
  );
};

export default CustomTextField;
