import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todos = [
  { name: 'SWIMMING', id: 'inlineCheckedbox1', checked: false, },
  { name: 'BREAKFAST', id: 'inlineCheckbox2', checked: false},
  { name: 'OFFICE', id: 'inlinecheckbox3', checked: false},
  { name: 'WORKOUT', id: 'inlinecheckbox4', checked: false},
  { name: 'DINNER', id: 'inlinecheckbox5', checked: false},
];

get selectedOptions(){
  return this.todos.filter(opt => opt.checked);
  }
}
