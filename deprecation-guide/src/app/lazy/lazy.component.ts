import { Component, OnInit } from '@angular/core';
import { LazyService } from "./lazy.service";

@Component({
  standalone: false,
  selector: 'app-lazy',
  template: `<p>lazy works!</p>`
})
export class LazyComponent implements OnInit {
  ngOnInit() {
    console.log("init............")
  }

  constructor(private lazyService: LazyService) {
    lazyService.getHeroes()
  }
}
