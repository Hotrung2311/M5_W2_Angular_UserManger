import {Injectable} from '@angular/core';
import {IUser} from './user/IUser/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser [] = [
    {
      id: 1,
      name: 'trung1',
      email: 'trung1@gmail.com',
      group_id: 1,
    },
    {
      id: 2,
      name: 'trung2',
      email: 'trung2@gmail.com',
      group_id: 2,
    },
    {
      id: 3,
      name: 'trung3',
      email: 'trung3@gmail.com',
      group_id: 3
    },
    {
      id: 4,
      name: 'trung4',
      email: 'trung4@codegym.vn',
      group_id: 3
    },
    {
      id: 5,
      name: 'trung5',
      email: 'trung5@codegym.vn',
      group_id: 2
    },
    {
      id: 6,
      name: 'trung6',
      email: 'trung6@codegym.vn',
      group_id: 3
    },
    {
      id: 7,
      name: 'trung7',
      email: 'trung7@codegym.vn',
      group_id: 3
    },
    {
      id: 8,
      name: 'trung8',
      email: 'trung8@codegym.vn',
      group_id: 3
    },
    {
      id: 9,
      name: 'trung9',
      email: 'trung9@codegym.vn',
      group_id: 3
    },
    {
      id: 10,
      name: 'trung10',
      email: 'trung10@codegym.vn',
      group_id: 3
    },
    {
      id: 11,
      name: 'trung11',
      email: 'trung11@codegym.vn',
      group_id: 3
    },
    {
      id: 12,
      name: 'trung12',
      email: 'trung12@codegym.vn',
      group_id: 3
    },    {
      id: 13,
      name: 'trung13',
      email: 'trung13@codegym.vn',
      group_id: 3
    },    {
      id: 14,
      name: 'trung14',
      email: 'trung14@codegym.vn',
      group_id: 3
    },    {
      id: 15,
      name: 'trung15',
      email: 'trung15@codegym.vn',
      group_id: 3
    },
    {
      id: 16,
      name: 'trung16',
      email: 'trung16@codegym.vn',
      group_id: 3
    },
    {
      id: 17,
      name: 'trung17',
      email: 'trung17@codegym.vn',
      group_id: 3
    },    {
      id: 18,
      name: 'trung18',
      email: 'trung18@codegym.vn',
      group_id: 3
    },    {
      id: 19,
      name: 'trung19',
      email: 'trung19@codegym.vn',
      group_id: 3
    },    {
      id: 20,
      name: 'trung20',
      email: 'trung20@codegym.vn',
      group_id: 3
    },
  ];

  constructor() {
  }

  public getUsers(): IUser[] {
    return this.users;

  }

  getUserById(id:number):IUser{
    for(let idx = 0;idx< this.users.length;idx++){
      if(this.users[idx].id == id){
        return this.users[idx]

      }
    }
  }

  editUserById(user:IUser){
    for(let idx = 0; idx<this.users.length;idx++){
      if(this.users[idx].id == user.id){
        this.users[idx] = user;
      }
    }
  }

  public filerByKeyword(keyword: string) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) !== -1;
    });
  }

  add(user:IUser):IUser{
    this.users.push(user)
    return user;
  }
}
