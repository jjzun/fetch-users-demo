import { Component, OnInit, HostListener } from '@angular/core';
import { ConfigService } from '../config.service';

export interface IUser {
  name: {
    first: string;
    last: string;
  }
  email: string;
}


@Component({
  selector: 'app-users-results',
  templateUrl: './users-results.component.html',
  styleUrls: ['./users-results.component.scss']
})
export class UsersResultsComponent implements OnInit {

  modalUserDetails : boolean = false;
  users: {};
  selectedUser: {};

  // https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c

  constructor( protected configService : ConfigService) { 
    

  }

  ngOnInit() {
    this.configService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectUser(event: any, item: number) {
    this.selectedUser = this.users[item];
    this.modalUserDetails = true;
  }

  closeDialog() {
    this.modalUserDetails = false;
  }

}
