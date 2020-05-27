import { createMuiTheme } from '@material-ui/core/styles';
import { lightPrimaryMain, lightSecondaryMain, lightPaperElevation4BGColor} from '../globalVariables';

const lightMuiTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: lightPrimaryMain,
    },
    secondary: {
      main: lightSecondaryMain
    }
  }
  ,
  overrides: {
    MuiPaper: {
      elevation4: {
        backgroundColor: lightPaperElevation4BGColor
      }
    }
  }
});

export default lightMuiTheme;