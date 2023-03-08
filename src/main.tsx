import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProductsProvider from './context/products'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </ChakraProvider>
)
