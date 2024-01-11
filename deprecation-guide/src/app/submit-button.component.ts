import { Component, Input } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-submit-button',
  template: `<p>submit-button works!</p> `
})
export class SubmitButtonComponent {
  private disabledValue = false;

  @Input()
  get disabled(): boolean {
    return this.disabledValue;
  }

  set disabled(value: boolean|'') {
    this.disabledValue = (value === '') || value;
  }
}
@Component({
  standalone: true,
  selector: 'app-submit-button-valid',
  template: `<p>submit-button works!</p>`
})
export class SubmitButtonValidComponent {

  static ngAcceptInputType_disabled: boolean|'';

  private disabledValue = false;

  @Input()
  get disabled(): boolean {
    return this.disabledValue;
  }
  /*
  set disabled(value: boolean) {
    this.disabledValue = (value === '') || value;
  }
  */
}
