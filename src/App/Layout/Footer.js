import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => (
  <footer className="FooteraApp">
    <Typography variant="h6" align="center" gutterBottom>
     Hanthía Blanco Gil
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      {"Práctica 'React: Patrones y componentes Avanzados'"}
    </Typography>
  </footer>
);

export default (Footer);