import { Component, Input } from '@angular/core';
// import { Item } from '../item';
// import { ITEMS } from '../mock-items';

@Component({
  standalone: true,
  selector: 'app-item-detail',
  template: `<p>Your item is: {{ childItem }} </p>`,
  imports: [],
})
export class ItemDetailComponent {
  @Input() childItem = '';

  // items = ITEMS;

  currentItem = 'bananas in boxes';
}
