import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent {
  name = 'pere';
  user = {
    email: 'test@gmail.com',
    id: 5
  };
  onSendMessageToDad(message: string) {
    alert(message);
  }

  changeUser(email: string) {
    this.user = { ...this.user, email: email };
  }
}
