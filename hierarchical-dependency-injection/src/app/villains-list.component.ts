import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Villain, VillainsService } from './villains.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  providers: [ VillainsService ],
  imports: [ NgFor, AsyncPipe ]
})
export class VillainsListComponent {
  villains: Observable<Villain[]>;

  constructor(private villainsService: VillainsService) {
    this.villains = villainsService.getVillains();
  }
}
