import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  // playing with pallete theme changes
  // palette: {
  //   type: 'dark',
  //   text: {
  //     primary: 'rgba(255,255,255,0.87)',
  //   },
  //   background: {
  //     paper: '#000',
  //   },
  // },
});

/* Enable Responsive Fonts */
theme = responsiveFontSizes(theme);

export default theme;
