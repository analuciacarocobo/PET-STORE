import { Injectable } from '@angular/core';

// Definimos la interfaz para representar un producto
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  // Array para almacenar los productos del carrito
  private cart: Product[] = [];

  constructor() { }

 addToCart(product: Product): void {
  this.cart.push(product);
}

removeFromCart(productId: number): void {
  this.cart = this.cart.filter(product => product.id !== productId);
}

getCart(): Product[] {
  return this.cart;
}

getTotalPrice(): number {
  return this.cart.reduce((total, product) => total + product.price, 0);
}

clearCart(): void {
  this.cart = [];
}

}
