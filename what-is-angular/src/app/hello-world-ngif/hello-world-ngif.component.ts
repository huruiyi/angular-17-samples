import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
  imports: [NgIf],
})
export class HelloWorldNgIfComponent {
  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
