export interface InitialType {
  cart: number[]
  addProduct: (idx: number) => void
  removeProduct: (idx: number) => void
}
