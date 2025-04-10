import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilsComponent {
  @Input() name = "";
  @Input({required: true}) user!: any ;
  /**
   *
   * Create event
   */
  @Output() sendMessageToDad = new EventEmitter<string>();

  /**
   * Method that emits the data to dad
   */
  sendMessage(): void {
    this.sendMessageToDad.emit('cc papa');
  }
}
