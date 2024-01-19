import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'hello-world-template',
  template: `
    <fieldset>
      <legend>
        hello-world-template.component.ts
      </legend>
      <label>Hello World Template！！</label>
      <button type="button" (click)="onEditClick()">Make text editable!</button>
      <p class="content-editable" [contentEditable]="canEdit">{{ message }}</p>
    </fieldset>
  `,
  styles: [
    `.content-editable {
      border: 2px solid orangered;
    }`
  ]
})
export class HelloWorldTemplateComponent {
  message = 'I am read only!';
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I am read only!';
    }
  }
}
