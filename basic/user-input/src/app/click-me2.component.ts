import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-click-me2',
  template: `
    <button type="button" (click)="onClickMe2($event)">No! .. Click me!</button>
    {{ clickMessage }}`,
})
export class ClickMe2Component {
  clickMessage = '';
  clicks = 1;

  onClickMe2(event: any) {
    const evtMsg = event ? ' Event target is ' + event.target.tagName : '';
    this.clickMessage = `Click #${this.clicks++}. ${evtMsg}`;
  }
}
