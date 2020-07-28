import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output() keyword: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(event) {
    let searchValue = event.target.value;
    this.keyword.emit(searchValue);
  }
}
