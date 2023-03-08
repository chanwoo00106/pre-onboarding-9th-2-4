import Product from '@/types/Product'
import { createContext, ReactNode, useState } from 'react'
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
