import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  enteredSearchValue: string = '';

  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  onSearch(){
    this.searchText.emit(this.enteredSearchValue)
  }
}
