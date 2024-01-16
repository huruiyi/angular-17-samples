import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from '../app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'lazy',
    // The new import() syntax
    loadChildren: () => import('../app/lazy/lazy.module').then(m => m.LazyModule)
    /*
    // The following string syntax for loadChildren is deprecated
    loadChildren: './lazy/lazy.module#LazyModule',
    */
  }];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppComponent
  ],
  exports: [RouterModule]
})
export class AppModule { }

class SomeModule { }
class SomeConfig { }

@NgModule({
})
export class MyModule {
  /*
  static forRoot(config: SomeConfig): ModuleWithProviders {
  */
  static forRoot(config: SomeConfig): ModuleWithProviders<SomeModule> {
    return {
      ngModule: SomeModule,
      providers: [
        {provide: SomeConfig, useValue: config}
      ]
    };
  }
}
