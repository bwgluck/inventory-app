import { Component, Input } from '@angular/core';

// This component is used to show the price of a product

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent {
	@Input() price: number;
}
