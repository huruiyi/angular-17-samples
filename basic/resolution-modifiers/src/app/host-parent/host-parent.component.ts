import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';
import { HostComponent } from '../host/host.component';


@Component({
  standalone: true,
  selector: 'app-host-parent',
  templateUrl: './host-parent.component.html',
  styleUrls: [ './host-parent.component.css' ],
  providers: [ {
    provide: FlowerService,
    useValue: {
      emoji1: '🌺💖😜🤞😁😐😙😉😆😍😘🥰😗😊😎😄😃🤣😂🤷‍♀️🤷‍♂️✌️😢🎶😀😀😁😂😶‍🌫️🤐😯😪',
      emoji2: '🤣😃😄😎😋😊😉😆😅😍😘🥰😗😙🥲🤔🤩🤗🙂☺️😚🫡🤨😐😑😶🫥😮😥😣😏🙄',
      emoji3: '😫🥱😴😒🤤😝😜😛😌😓😔😕🫤🙃🫠😞😖🙁☹️😲🤑😟😤😢😭😦😧😰‍💨😬🤯😩',
      emoji4: '😮😨😱🥵🥶😳🤪😵😷🤬😡😠🥴😵‍💫🤒🤕🤢🤮🤧😇🤡🤠🥹🥺🥸🥳🤥🫨🤭🫢🫣🤫',
      emoji5: '👺👹👿😈🤓🧐💀☠️👻👽👾🤖😼😻😹😸😺💩😽🙀😿😾🙈🙉🦁🐱🐺🐶🐵🙊🐯🦒',
      emoji6: '🦊🦝🐮🐷🐻‍❄️🐻🐰🐹🐭🐗🐨🐼🐸🦓🐴🫎🐾🐽🐲🐔🦄🫏🐒🦍🦧🦮🐕‍🦺🐩🐎🐆🐅🐈‍⬛',
      emoji7: '🐈🐕🦌🦬🦏🦛🐂🐃🐪🐐🐑🐏🐖🐄🐫🦙🦘🦥🦨🦡🐇🦔🐀🐁🦣🐘🐿️🦫🦎🐊🐢🐍',
      emoji8: '🐬🦈🦦🦖🦕🐉🦭🐳🐋🐟🐠🐡🐚🦀🦞🐙🦑🦐🪸🪼🦆🐓🦃🦅🕊️🦢🦜🪽🐦‍⬛🪿🐦🪶',
      emoji9: '🦤🦉🦚🦩🐧🐥🐤🐣🦇🦋🦗🪱🪰🦟🐛🐌🐜🪳🐝🪲🐞🦂🧞🧞‍♂️🧞‍♀️🦠🕸️🕷️🧟‍♀️🧟‍♂️🧟🧌',
      emojiA: '🗣️👤🦷🦴👀👁️🫂👥👅👄🫦🧠🫀🫁⛷️🤺👣🦿🦾☮️☪️🕉️☸️✡️🔯☯️♌♋♍♌♎♏'
    }
  } ],
  imports: [ HostComponent ]
})
export class HostParentComponent {

  constructor(public flower: FlowerService) {
  }

}
