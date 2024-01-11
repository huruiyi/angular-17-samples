import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  FormsModule,
  FormControl,
} from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ FormsModule, NgFor ]
})
export class AppComponent implements OnInit {
  title = 'example';
  value = 'initial value';
  control: FormControl = new FormControl('');
  options = [
    'repeat-value'
  ];

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
