import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserGit } from '../../models/userGit';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  user: UserGit | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser() {
    this.userService.getGitUser('facebook').subscribe((response: UserGit) => {
      this.user = response;
    })
  }

}
