import { Component, Host, Optional } from '@angular/core';
import { FlowerService } from '../flower.service';
import { HostChildComponent } from '../host-child/host-child.component';

@Component({
  standalone: true,
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: [ './host.component.css' ],
  //  provide the service
  providers: [ { provide: FlowerService, useValue: { emoji1: '🌷' } } ],
  imports: [ HostChildComponent ]
})
export class HostComponent {
  // use @Host() in the constructor when injecting the service
  constructor(@Host() @Optional() public flower?: FlowerService) {
  }

}

// if you take out @Host() and the providers array, flower will be red hibiscus


