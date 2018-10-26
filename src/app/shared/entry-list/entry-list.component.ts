import { Entry } from './../../core/models/entry';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit, OnChanges {

  @Input() data: Entry[];
  @Input() columns: string[];
  @Output() addEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.data);
  }

  addMethod() {
    this.addEvent.emit();
  }
}
