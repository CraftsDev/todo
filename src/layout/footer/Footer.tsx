import React from 'react';
import { Container } from '@material-ui/core';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return <Container>Crafts Development &copy; {year}</Container>;
};

export default Footer;
