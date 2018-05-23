import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

// This component is for rendering all ProductRows and storing the currently selected Product

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {

  // The input is the product being passed
  @Input() productList: Product[];

  // The output returns the current product whenever a new one is selected
  @Output() onProductSelected: EventEmitter<Product>;

  // Local state containing the currently selected product
  private currentProduct: Product;

  constructor() {
  	this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
  	this.currentProduct = product;
  	this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
  	if (!product || !this.currentProduct) {
  		return false;
  	}
  	return product.sku === this.currentProduct.sku;
  }
}
