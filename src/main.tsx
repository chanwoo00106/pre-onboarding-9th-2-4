import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CartProvider from './context/cart'
import ProductsProvider from './context/products'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <CartProvider>
      <ChakraProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </ChakraProvider>
    </CartProvider>
  </BrowserRouter>
)
