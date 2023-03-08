import getProducts from '@/services/getProducts'
import Product from '@/types/Product'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InitialType } from './types/products'

const InitialValue: InitialType = {
  products: [],
}

const ProductsContext = createContext<InitialType>(InitialValue)

interface Props {
  children: ReactNode
}

const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      if (data) setProducts(data)
    })()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
