import { createContext, ReactNode, useEffect, useState } from 'react'
import { InitialType } from './types/cart'

export const CartContext = createContext<InitialType>({
  cart: [],
  addProduct: () => {
    return
  },
  removeProduct: () => {
    return
  },
})

interface Props {
  children: ReactNode
}

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<number[]>([])

  const addProduct = (idx: number) => {
    if (cart.includes(idx)) return
    setCart((cart) => [...cart, idx])
  }

  const removeProduct = (idx: number) => {
    if (cart.includes(idx)) return
    setCart((cart) => cart.filter((i) => i !== idx))
  }

  useEffect(() => {
    if (localStorage.getItem('cart')) return

    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (!cart) return

    setCart(JSON.parse(cart))
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
