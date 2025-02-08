import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { User } from '../../models/users';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userSelected?: User;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(100)]]
    })
  }

  submitForm() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  users: User[] = [
    {
      nome: 'Alexandre',
      idade: 43,
    },
    {
      nome: 'Carol',
      idade: 42,
    },
    {
      nome: 'Arthur',
      idade: 12
    }
  ]

  infoUserSelected(user: User) {
    this.userSelected = user;
    this.userService.setUser(user);
  }
}
