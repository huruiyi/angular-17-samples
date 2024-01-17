import { Component } from '@angular/core';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { UniMultiCastComponent } from './uni-multi-cast.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ MessageComponent, UniMultiCastComponent ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorCount = 0;
  private warningCount = 0;

  constructor(private messageService: MessageService) { }

  addError(text: string) {
    this.messageService.addError(text);
  }

  addWarning(text: string) {
    this.messageService.addWarning(text);
  }

  createErrorMessage() {
    this.addError(`error #${++this.errorCount}`);
  }

  createWarningMessage() {
    this.addWarning(`warning #${++this.warningCount}`);
  }
}
