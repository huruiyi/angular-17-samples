import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'hello-world',
  template: `
    <fieldset>
      <legend>hello-world.component.ts</legend>
      <label>Hello, World!</label>
    </fieldset>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
