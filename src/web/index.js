import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './header';
import Footer from './footer';


function Layout() {

  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
   
   
  )
}

export default Layout