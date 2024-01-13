import { Product } from "../types/Product";

export const calculateTotalPrice = (cart: Product[]): number => {
  return cart.reduce((acc, item) => {
    return acc + item.price * (item.quantity ?? 0);
  }, 0);
};
