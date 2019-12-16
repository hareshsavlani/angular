import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  rolelist = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  selectedRoles = ['Boots', 'Clogs']; 
  onRoleChange(selectedRoles: string[]) {
    console.log(selectedRoles);
  }
}
