import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loop-back',
  template: `
    <input #box (keyup)="(0)" />
    <p>{{ box.value }}</p>
  `,
})
export class LoopbackComponent {
}
