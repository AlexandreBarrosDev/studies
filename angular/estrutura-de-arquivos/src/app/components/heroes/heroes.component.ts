import { Component, OnInit } from '@angular/core';

import { HeroService } from './shared/hero.service';
import { Hero } from './shared/hero.model';

@Component({
  selector: 'toh-heroes',
  template: `
      <pre>{{heroes | json}}</pre>
    `,
  standalone: false,
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.heroService.getHeroes().then((heroes) => (this.heroes = heroes));
  }
}
