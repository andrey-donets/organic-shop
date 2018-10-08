import { Product } from './product';

export class ShoppingCartItem {
  $key: string;
  title: string;
  imageUrl: number;
  price: number;
  quantity: number;

  get totalPrice() { return this.price * this.quantity; }
}