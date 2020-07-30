import { Injectable } from '@angular/core';
import {IGroup} from '../IGroup/igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private listGroup: IGroup[] = [
    {
      id: 1,
      name: 'Male'
    },
    {
      id: 2,
      name: 'Female'
    },
    {
      id: 3,
      name: 'Other'
    }

  ]

  constructor() { }

  getGroupList(){
    return this.listGroup;
  }
}
