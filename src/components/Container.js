import React from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
//import Card from "./Card/Card"
import CardClient from "./CardClient/CardClient"
import SideBar from './SideBar/SideBar';
import Form from './Form/Form';
import We from './We/We';
import Contact from './Contact/Contact';
import Error404 from './Pages/Error404';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Container = () => {

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route exact path="/" element={<CardClient />} />
          <Route exact path="/agregar" element={<Form />} />
          <Route exact path="/nosotros" element={<We />} />
          <Route exact path="/contactanos" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Container;
