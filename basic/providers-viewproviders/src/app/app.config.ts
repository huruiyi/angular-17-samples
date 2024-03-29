import { ApplicationConfig } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

const appConfig: ApplicationConfig = {
  providers: [
    // required for e2e testing on aio
    provideProtractorTestingSupport()
  ]
};

export default appConfig;
