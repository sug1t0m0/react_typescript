import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const defaultTheme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 42
    }
  },
  palette: {
    // primary: blue
    primary: {
      main: blue[300]
    }
  },
  props: {
    MuiCheckbox: {
      color: "primary"
    },
    MuiList: {
      dense: true
    },
    MuiRadio: {
      color: "primary"
    },
    MuiSwitch: {
      color: "primary"
    },
    MuiTable: {
      size: "small"
    },
    MuiTextField: {
      variant: "outlined"
      // InputProps: {
      //     style: {
      //         height: 38
      //     }
      // }
    }
  },
  typography: {
    // fontFamily: "Indie Flower",
    fontSize: 16,
    button: {
      textTransform: "none"
    }
  }
});
