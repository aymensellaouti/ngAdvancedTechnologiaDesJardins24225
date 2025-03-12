import { Component, computed, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-first-signal',
    templateUrl: './first-signal.component.html',
    styleUrl: './first-signal.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
})
export class FirstSignalComponent {
  x = 5;
  y = 7;
  z = this.x + this.y;
}
