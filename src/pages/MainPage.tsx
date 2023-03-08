import ProductCard from '@/components/ProductCard'
import { ProductsContext } from '@/context/products'
import { Spacer, Wrap } from '@chakra-ui/react'
import { useContext } from 'react'

const MainPage = () => {
  const { products } = useContext(ProductsContext)

  return (
    <Wrap>
      {products?.map((i) => (
        <div key={i.idx}>
          <ProductCard key={i.idx} product={i} />
          <Spacer />
        </div>
      ))}
    </Wrap>
  )
}

export default MainPage
