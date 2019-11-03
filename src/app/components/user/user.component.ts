import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entity/User';
import {ServiceUserService} from '../../service/service-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [{id: 1,
    name: 'nguyen khai hoan',
    username: 'hoannk',
    email: 'hoannk.evnit@evn.com.vn',
    address: null}];

  constructor(public serviceUser: ServiceUserService) {

    // tslint:disable-next-line: label-position
   // this.users = serviceUser.getAllUser();


    this.serviceUser.getAllUser().subscribe(res => {
      this.users = res;
    });

    console.log(this.users);

  }

  ngOnInit() {
  }

}
