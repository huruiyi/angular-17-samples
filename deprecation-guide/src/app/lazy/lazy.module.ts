import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LazyRoutingModule} from './lazy-routing.module';
import {LazyService} from "./lazy.service";
import {LazyComponent} from "./lazy.component";

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyComponent],
  providers: [LazyService]
})
export class LazyModule {
}
