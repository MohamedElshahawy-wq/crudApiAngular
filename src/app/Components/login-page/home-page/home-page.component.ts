import { Component, Input, OnInit } from '@angular/core';
import { GetUsersApiService } from 'src/app/Services/get-users-api.service';
import { IUser } from 'src/app/ViewModels/iuser';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ok } from 'assert';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  // users?: IUser[];
  IUUSer: IUser;
  currentuser = null;

  UserForm: FormGroup;
  UserList: IUser[] = [];
  name: any;

  constructor(
    private UsService: GetUsersApiService,

    private router: Router
  ) {}
  id: any;
  ngOnInit(): void {
    this.getUsersAll();
  }
  searchTitle(): void {
    this.UsService.searchByName(this.name).subscribe(
      (data) => {
        this.UserList = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(id) {
    confirm(`are u Sure To Delete user With Id= ${id}`);
    if (confirm==ok) {
      this.UsService.deleteItem(id).subscribe(
        () => {
          console.log(`Employee Deleted`), this.getUsersAll();
        },

        (err) => console.log(err)
      );
    }
    else{return false;}
  };

  getUsersAll() {
    this.UsService.getAllMyUsers().subscribe(
      (response) => {
        console.log('in subscribe');
        this.UserList = response;
        console.log(this.UserList);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
