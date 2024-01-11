import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import {
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'example';
  value = 'initial value';
  control: FormControl = new FormControl('');
  options = [
    'repeat-value'
  ];

  /*
  @Input() @ContentChild(TemplateRef) tpldeprecated !: TemplateRef<any>;
  */

  @Input() tpl !: TemplateRef<any>;
  @ContentChild(TemplateRef) inlineTemplate !: TemplateRef<any>;

  ngOnInit() {

    this.value = 'some value';

    this.setValue();
  }

  setValue(): void {
    this.control.setValue('some value');
  }
}
