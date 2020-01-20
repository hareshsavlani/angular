import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface User {
  id: string,
  value: string;
}


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})


export class ListsComponent implements OnInit{

  public form: FormGroup;
  options1: User[] = [{ id: '1', value: 'ABC1' },{ id: '2', value: 'ABC2' }, { id: '3', value: 'ABC3' }, { id: '4', value: 'ABC4' }, { id: '5', value: 'ABC5' }];
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      ip1: [
        "ABC",
        Validators.compose([Validators.required])
      ],
      ip2: [
        null,
        Validators.compose([Validators.required])
      ],
      ip3: [
        null,
        Validators.compose([Validators.required])
      ],
      ip4: [
        null,
        Validators.compose([Validators.required])
      ],
      ip5: [
        null,
        Validators.compose([Validators.required])
      ],
      ip6: [
        null,
        Validators.compose([Validators.required])
      ],
      date1: [
        null,
        Validators.compose([Validators.required])
      ],
      date2: [
        null,
        Validators.compose([Validators.required])
      ],
      myControl1:[null,Validators.required],
      myControl2:[null,Validators.required],
      myControl3:[null,Validators.required],
      myControl4:[null,Validators.required],
      checkbox:[null]
    });

  
  }

  
  
}
