import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

// This component is for the view of a single Product

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent {
	@Input() product: Product;
	@HostBinding('attr.class') cssClass = 'item';
}
