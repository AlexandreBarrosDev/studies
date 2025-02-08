import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BaseUiComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
  }
  constructor(private userService: UserService) { }

  getUser() {
    const user = localStorage.getItem('user');
    this.userService.setUser(user ? JSON.parse(user) : undefined);
  }
}
