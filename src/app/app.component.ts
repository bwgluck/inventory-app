import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

// Top-level component for the app

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
  	this.products = [
  		new Product(
  			'MONSTERHUNTERWORLDPS4',
  			'Monster Hunter World - PS4',
  			'/assets/images/products/MHWPS4.jpg',
  			['Video Games', 'Sony', 'Playstation 4'],
  			49.99
  			),
  		new Product(
  			'XBOXONECONTROLLERBLACK',
  			'Xbox One Controller - Black',
  			'/assets/images/products/XB1ControllerBlack.jpg',
  			['Video Games', 'Microsoft', 'XBox One'],
  			59.99
  			),
  		new Product(
  			'GRAYNINTENDOSWITCH',
  			'Nintendo Switch - Gray',
  			'/assets/images/products/GraySwitch.jpg',
  			['Video Games', 'Nintendo', 'Nintendo Switch'],
  			249.99
  			)
  	];
  }

  productWasSelected(product: Product): void {
  	console.log('Product clicked: ', product);
  }
}
