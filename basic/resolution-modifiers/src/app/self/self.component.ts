import { Component, Self } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  standalone: true,
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: [ './self.component.css' ],
  providers: [ { provide: FlowerService, useValue: { emoji: '🌷' } } ]
})
export class SelfComponent {
  constructor(@Self() public flower: FlowerService) {
  }
}

// This component provides the FlowerService so the injector
// doesn't have to look further up the injector tree

