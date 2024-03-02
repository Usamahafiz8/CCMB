// In your theme.ts file

import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string; // Define your custom color property
      };
      secondary: {
        main: string;
      };
    };
    typography: {
      fontFamily: string; // Define your default font family
    };
  }
}

const lightTheme: PaletteMode = "light";
const darkTheme: PaletteMode = "dark";

const customMain = "#566AEB"; // Your main color
const defaultFontFamily = '"Bai Jamjuree", sans-serif';
export const light = createTheme({
  palette: {
    mode: lightTheme,
    primary: {
      main: customMain, // Assign your main color to the new property
    },
    secondary: {
      main: "#E1EAFC",
    },
  },
  typography: {
    fontFamily: defaultFontFamily,
  },
  // Add other theme customizations for light theme
});

export const dark = createTheme({
  palette: {
    mode: darkTheme,

    primary: {
      main: customMain, // Use the same color for dark theme consistency
    },
  },
  typography: {
    fontFamily: defaultFontFamily,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 600,
        },
        h2: {
          fontWeight: 600, // Adjust the fontWeight for h1 variant
        },
        h3: {
          fontWeight: 600, // Adjust the fontWeight for h1 variant
        },
        h4: {
          fontWeight: 600, // Adjust the fontWeight for h1 variant
        },
        h5: {
          fontWeight: 600, // Adjust the fontWeight for h1 variant
        },
        h6: {
          fontWeight: 600, // Adjust the fontWeight for h1 variant
        },
      },
    },
  },
  // Add other theme customizations for dark theme
});

export default light; // Or your preferred default theme
