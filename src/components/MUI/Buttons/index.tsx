import {
  Button,
  styled,
  Theme,
  SxProps,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  backgroundBtn?: string;
  colorBtn?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}
interface StyledButtonProps extends MuiButtonProps {
  colorBtn?: string;
  backgroundBtn?: string;
}
const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, colorBtn, backgroundBtn }) => ({
    background: backgroundBtn ? backgroundBtn : theme.palette.primary.main,
    color: colorBtn ? colorBtn : "white",
    "&:hover": {
      background: backgroundBtn ? backgroundBtn : theme.palette.primary.main,
      color: colorBtn ? colorBtn : "white",
    },
  })
);
function Buttons({ children, colorBtn, backgroundBtn,onClick, ...rest }: ButtonProps) {
  return (
    <StyledButton
      variant={"contained"}
      colorBtn={colorBtn}
      backgroundBtn={backgroundBtn}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Buttons;
