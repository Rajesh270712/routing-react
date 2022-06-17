import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/home';
import Product from './components/product';
import ProductDetails from './components/productDetails';
import NotFound from './components/NotFound';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Product/>}  ></Route> */}
        <Route path='/product' element={<Product/>}  ></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails/>}  ></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
