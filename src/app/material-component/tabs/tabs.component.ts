import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { FormControl } from '@angular/forms';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  
}
