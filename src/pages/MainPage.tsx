import ProductCard from '@/components/ProductCard'
import { ProductsContext } from '@/context/products'
import { useContext } from 'react'

const MainPage = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div>
      {products?.map((i) => (
        <ProductCard key={i.idx} product={i} />
      ))}
    </div>
  )
}

export default MainPage
