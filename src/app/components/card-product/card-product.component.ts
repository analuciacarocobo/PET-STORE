import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{
  @Input() product = {
    name: '',
    price: 0,
    description: '',
    inventory: 0,
    image: '',
    cantidad: 0
  };
	//1. agregar output 
  @Output() addToCart = new EventEmitter();
  
  cantidad: number = 0;
  soldOut: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    if(this.cantidad < this.product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }

  removeProduct() {
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }

  addToCartHandler() { //2. crear metodo
    if(this.cantidad > 0){ //3. validar si tiena una cantidad de producto
      this.product['cantidad'] = this.cantidad; //4. asigna la cantidad a perdir
      this.addToCart.emit(this.product); //5. enviar la informacion por el event emiter del output
      this.cantidad = 0;
    }
    return null;
  }
}