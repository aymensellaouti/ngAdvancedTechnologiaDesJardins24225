import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class TwoComponent {
  two = 'init value';
}
