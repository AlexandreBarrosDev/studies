import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserGit } from '../../models/userGit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{
  user: UserGit | undefined;
  username: string = '';
  constructor(private userService: UserService) { }

  getGitUser() {
    this.userService.getGitUser(this.username).subscribe((response: UserGit) => {
      this.user = response;
    })
  }

}
