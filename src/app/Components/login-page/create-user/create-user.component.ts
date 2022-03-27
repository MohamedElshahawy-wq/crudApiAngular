import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUsersApiService } from 'src/app/Services/get-users-api.service';
import { Router } from '@angular/router';

import { IUser } from 'src/app/ViewModels/iuser';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  iuser: IUser = {
    name: '',
    mobilephone: '',
    age: '',
    salary: '',
  };
  submitted = false;

  userForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private UsService: GetUsersApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  userId: any;

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParamMap.get('id');
    if (this.userId) {
      //call api get userItem
      this.UsService.getById(this.userId).subscribe((response) => {
        this.iuser = response;
        console.log(response);
      });
    }

    console.log(this.userId);
  }

  submitFor(xyz) {
    if (this.userId) {
      this.editUser(xyz);
    } else {
      this.saveUser(xyz);
    }
  }

  saveUser(xyz): void {
    console.log(xyz.value);

    this.UsService.create(xyz.value).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/HomePage']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editUser(xyz): void {
    console.log(xyz.value);

    this.UsService.update(this.userId, xyz.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/HomePage']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newUser(): void {
    this.submitted = false;
    this.iuser = {
      name: '',
      mobilephone: '',
      salary: '',
      age: '',
    };
  }
}
