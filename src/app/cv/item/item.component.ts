import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { NgStyle } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    standalone: true,
    imports: [NgStyle, DefaultImagePipe],
})
export class ItemComponent {
  private cvService = inject(CvService);

  @Input() cv: Cv | null = null;
  @Input() size = 50;
  @Output() selectCv = new EventEmitter<Cv>(); 

  onSelectCv() {
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
