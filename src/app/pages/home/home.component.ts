import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/core/models/entry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Entry[];
  columns: string[];

  constructor() {
    this.columns = ['id', 'value', 'date'];
    this.data = [
      { id: '1', usefulValue: 0.22, tributeValue: 0.22, date: new Date() },
      { id: '2', usefulValue: 0.23, tributeValue: 0.22, date: new Date() },
      { id: '3', usefulValue: 0.24, tributeValue: 0.22, date: new Date() }
    ];
   }

  ngOnInit() {
  }

  onAddElement(value: Entry) {
    const lastIndex = this.data.map(x => x.id);
    value.id = `${(+lastIndex[this.data.length - 1]) + 1}`;
    this.data.push(value);
    console.log(this.data);
  }

}
