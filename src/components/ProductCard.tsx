import { CartContext } from '@/context/cart'
import Product from '@/types/Product'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { memo, useContext } from 'react'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { addProduct } = useContext(CartContext)

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={product.mainImage}
          alt={product.description}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text>{product.spaceCategory}</Text>
          <Text color='blue.600' fontSize='2xl'>
            {product.price}₩
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button
            variant='solid'
            colorScheme='blue'
            onClick={() => addProduct(product.idx)}
          >
            예약
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default memo(ProductCard)
