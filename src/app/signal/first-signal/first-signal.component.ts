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
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => this.z() * 2);

  doubleMoiLeSignal(monSignal: WritableSignal<number>) {
    monSignal.update((valuerActuelleDuSignal) => valuerActuelleDuSignal * 2)
  }

}
