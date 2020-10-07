import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
     Hanthía Blanco Gil
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      {"Práctica 'React: Patrones y componentes Avanzados'"}
    </Typography>
  </footer>
);

export default withStyles(styles)(Footer);