import { Injectable, OnDestroy } from "@angular/core";


@Injectable()
export class LazyService implements OnDestroy {
  constructor() {
    console.log('LazyService instance created.');
  }

  ngOnDestroy() {
    console.log('LazyService instance destroyed.');
  }

  getHeroes() {
    console.log("LazyService...")
  }
}
