import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  constructor() {
    this.title = '';
    this.description = '';
  }

  @Input() title: string;
  @Input() description: string;
}



