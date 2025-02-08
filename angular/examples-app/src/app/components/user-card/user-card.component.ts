import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/users';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output() userInfoEmitter = new EventEmitter<User>();

  returnData() {
    this.userInfoEmitter.emit(this.user);
  }
}
