import { Banco } from './../../core/models/banco';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/core/models/entry';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {

  @Output() OnAdd: EventEmitter<Entry> = new EventEmitter<Entry>();

  bancos: Banco[];
  entryForm: FormGroup;
  entry: Entry;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {

    this.bancos = [
      {id: '01', titulo: 'Banco Inter'},
      {id: '02', titulo: 'Nuconta'}
    ];
   }

  ngOnInit() {
    this.createEntryForm();
  }

  createEntryForm() {
    this.entryForm = this.fb.group({
      bancoId: ['', Validators.required],
      fullValue: ['', Validators.required],
      usefulValue: ['', Validators.required],
      tributeValue: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    this.entry = Object.assign({}, this.entryForm.value);
    console.log(this.entry);
    this.snackBar.open('Adicionado com sucesso!', '', {
      duration: 2000,
    });

    this.OnAdd.emit(this.entry);
  }
}
