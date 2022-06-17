import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Spinner,
  Alert,
  AlertIcon ,
  AlertDescription,
  AlertTitle
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [productData, setProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError ]  = React.useState(false);

  React.useEffect(() => {
    getProductData();
  }, []);
  console.log(process.env.REACT_APP_BASE_URL);
  const getProductData = () => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_BASE_URL}/products`)
      .then(res => res.json())
      .then(res => setProductData(res))
      .catch(() =>  setIsError(true))
      .finally(()=>setIsLoading(false))
  };

  if(isLoading){
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    m={"10% 50%"}
  />
  }
if(isError){
    return <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Error!</AlertTitle>
    <AlertDescription>Something Went Wrong </AlertDescription>
  </Alert>
}
  return (
    
    <TableContainer  >

      <Table  variant="simple">
        <Thead >
          <Tr>
            <Th>Product Name</Th>
            <Th>Price </Th>
            <Th>More details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productData.map(product => (
            <Tr key={product.id} >
              <Th>{product.name}</Th>
              <Th>{product.price}</Th>
              <Th>
                <Link to={`/productDetails/${product.id}`}  >
                <Button colorScheme="teal" size="xs">
                  More Details
                </Button>
                </Link>
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Product;
