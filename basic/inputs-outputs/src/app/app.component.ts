import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { AliasingComponent } from './aliasing.component';
import { InputOutputComponent } from './input-output.component';
import { InTheMetadataComponent } from './in-the-metadata.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemDetailMetadataComponent } from './item-details-metadata.component';
import { ItemOutputComponent } from './item-output.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    AliasingComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    ItemDetailComponent,
    ItemDetailMetadataComponent,
    ItemOutputComponent,
    NgFor
  ]
})

export class AppComponent {
  currentItem = 'Television';

  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];


  addItem(newItem: string) {
    this.items.push(newItem);
  }


  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item: string) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item: string) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
}
