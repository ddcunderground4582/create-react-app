import { createMuiTheme } from '@material-ui/core/styles';
import {darkPrimaryMain, darkSecondaryMain, darkPaperElevation4BGColor} from '../globalVariables';

const darkMuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: darkPrimaryMain,
    },
    secondary: {
      main: darkSecondaryMain
    }
  }
  ,
  overrides: {
    MuiPaper: {
      elevation4: {
        backgroundColor: darkPaperElevation4BGColor
      }
    }
  }
});

export default darkMuiTheme;