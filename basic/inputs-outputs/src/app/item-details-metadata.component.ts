import { Component, Input } from '@angular/core'; // First, import Input
import { booleanAttribute } from '@angular/core'; // First, import booleanAttribute
@Component({
  standalone: true,
  selector: 'app-item-detail-metadata',
  template: `
  <h2>Child component with &#64;Input() metadata configurations</h2>

  <p>
    Today's item: {{item}}
    Item's Availability: {{itemAvailability}}
  </p>
  `
})

export class ItemDetailMetadataComponent {
  @Input({required: true}) item!: string; // Second, decorate the property with required metadata

  @Input({transform: booleanAttribute}) itemAvailability!: boolean; // Second, decorate the property with transform
}

