import {Component, OnInit} from '@angular/core';
import {IUser} from './IUser/iuser';
import {UserService} from '../user.service';
import {MenuComponent} from '../core/menu/menu.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  titlePage = 'User list';
  users: IUser[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.users = this.userService.getUsers();
  }

  getResultList(keyword:string){
    this.users = this.userService.filerByKeyword(keyword);
  }

  delete(id:number) {
    alert("delete item")
    let newArrayAfterDelete = [];
    this.users.map(user =>{
      if(user.id != id){
        newArrayAfterDelete.push(user);
      }
    });
    this.users = newArrayAfterDelete;
  }

  search(event) {
    let search_value:string = event;
    return (search_value)? this.getResultList(event) : this.getAllUser();


  }
}