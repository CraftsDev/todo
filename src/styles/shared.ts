import { Theme } from '@material-ui/core';

export const reusablePaperStyle = (theme: Theme) => ({
  background: theme.palette.background.paper,
  marginTop: 20,
  marginBottom: 2,
  padding: 20,
});

export const reusableIconStyle = (theme: Theme) => ({
  marginRight: theme.spacing(1),
});
