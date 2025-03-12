import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mini-word',
    templateUrl: './mini-word.component.html',
    styleUrls: ['./mini-word.component.css'],
    standalone: true,
    imports: [
        NgStyle,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class MiniWordComponent {
  color = 'red';
  size = 75;
  font = 'garamond';
}
