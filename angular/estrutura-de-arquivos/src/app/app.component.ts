import {Component} from '@angular/core';

import {HeroService} from './components/heroes/shared/hero.service';

@Component({
  selector: 'toh-app',
  template: `
      <toh-heroes></toh-heroes>
    `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
  standalone: false,
})
export class AppComponent {}
