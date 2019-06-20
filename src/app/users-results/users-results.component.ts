import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscription } from 'rxjs';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-users-results',
  templateUrl: './users-results.component.html',
  styleUrls: ['./users-results.component.scss']
})
export class UsersResultsComponent implements OnInit {

  modalUserDetails : boolean = false;
  filtering: boolean = false;
  searchText = '';
  allUsers: IUser[];
  filteredUsers: IUser[];
  selectedUsers: IUser[];
  subscription: Subscription;

  selectedfirstName: string;
  selectedLastName: string;
  selectedEmail: string;
  selectedPhone: string;
  selectedCell: string;
  selectedPic: string;

  constructor( protected configService : ConfigService) { 
  }

  ngOnInit() {
    this.subscription = this.configService.getUsers().subscribe(
      //   (data) => { // Success
      //     this.allUsers = data['results'];
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
     users => this.allUsers = users);

  }

  filterUsers() {
    this.filteredUsers = this.allUsers.filter(user => user.nameFirst.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 || user.nameLast.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    this.filtering = true;
  }

  selectUser(event: any, item: number) {
    
    if(this.filtering) {
      this.selectedUsers = [...this.filteredUsers];
    } else {
      this.selectedUsers = [...this.allUsers];
    }

    this.selectedfirstName = this.selectedUsers[item].nameFirst;
    this.selectedLastName = this.selectedUsers[item].nameLast;
    this.selectedEmail = this.selectedUsers[item].email;
    this.selectedPhone = this.selectedUsers[item].phone;
    this.selectedCell = this.selectedUsers[item].cell;
    this.selectedPic = this.selectedUsers[item].picLarge;

    this.modalUserDetails = true;
  }

  closeDialog() {
    this.modalUserDetails = false;
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  

}
