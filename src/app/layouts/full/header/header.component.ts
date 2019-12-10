import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  public config: PerfectScrollbarConfigInterface = {};


  // This is for Notifications
  notifications: Object[] = [
    {
      round: 'round-success',
      icon: 'person_add',
      title: 'Role 1'
    },
    {
      round: 'round-success',
      icon: 'person_add',
      title: 'Role 2'
    },
    {
      round: 'round-success',
      icon: 'person_add',
      title: 'Role 3'
    },
    {
      round: 'round-success',
      icon: 'person_add',
      title: 'Role 4'
    }
  ];

}
