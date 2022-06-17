import React from "react";
import { useParams } from "react-router-dom";
import {
    Skeleton,
    Stack,
    Alert,
    AlertIcon ,
    AlertDescription,
    AlertTitle,
    Box,
    Center
  } from '@chakra-ui/react';

const ProductDetails = () =>{

    const {id}= useParams();
   

        const [productData, setProductData] = React.useState({});
        const [isLoading, setIsLoading] = React.useState(false);
        const [isError, setIsError ]  = React.useState(false);
      
        React.useEffect(() => {
          getProductData();
        }, []);
      
        const getProductData = () => {
          setIsLoading(true)
          fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(res => setProductData(res))
            .catch(() =>  setIsError(true))
            .finally(()=>setIsLoading(false))
        };
        if(isLoading){
            return <Stack w={"50%"} m={"30px auto"}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
          }
        if(isError){
            return <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>Something Went Wrong </AlertDescription>
          </Alert>
        }
    return (
       <Box fontSize={25} m={30} color={"blue"} >
            <Center>Product Name : {productData.name}</Center>
            <Center> Price : INR {productData.price}</Center>
       </Box>
    )
}


export default ProductDetails;