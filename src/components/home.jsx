import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg={'green'} p={5} display={'flex'} justifyContent={'space-evenly'} fontSize={19} color={"white"} >
      <Link to={'/'}> Home </Link>
      <Link to={'/product'}>Product </Link>
      <Link to={'/productDetails'}>Product Details </Link>
    </Box>
  );
};

export default Navbar;
