import { createTheme } from "@mui/material/styles";
import * as color from "@/colors";

import { Plus_Jakarta_Sans } from "next/font/google";

const PlusFamiliy = Plus_Jakarta_Sans({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: PlusFamiliy.style.fontFamily
  },
  palette: {
    primary: {
      main: color.primary
    },
    secondary: {
      main: color.secondary
    }
  }
});

export default theme;
