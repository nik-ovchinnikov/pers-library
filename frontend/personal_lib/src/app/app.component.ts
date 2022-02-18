import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-lib';
  myForm: FormGroup = new FormGroup({});
}

// todo журнал действий пользователя можно просматривать где-то в приложении. Создать службу логгирования.
