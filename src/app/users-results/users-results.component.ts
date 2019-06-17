import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-users-results',
  templateUrl: './users-results.component.html',
  styleUrls: ['./users-results.component.scss']
})
export class UsersResultsComponent implements OnInit {

  
  users: any[] = [];

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

}
