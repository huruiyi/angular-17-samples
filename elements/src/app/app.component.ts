import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="app-root-div">
        <input class="root-ele" #msg value="Hello World，世界你好！！！"/>
        <button class="root-ele" type="button" (click)="popup.showAsComponent(msg.value)">Show as component</button>
        <button class="root-ele" type="button" (click)="popup.showAsElement(msg.value)">Show as element</button>
    </div>
  `,
  providers: [PopupService],
  imports: [PopupComponent],
})
export class AppComponent {
  constructor(
    injector: Injector,
    public popup: PopupService,
  ) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
