import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RainbowDirective } from '../rainbow.directive';
import { HighlightDirective } from '../highlight.directive';

@Component({
    selector: 'app-ngclass',
    templateUrl: './ngclass.component.html',
    styleUrls: ['./ngclass.component.css'],
    standalone: true,
    imports: [
        NgClass,
        RainbowDirective,
        HighlightDirective,
    ],
})
export class NgclassComponent {
  isAllume = false;
  interrupteur() {
    this.isAllume = !this.isAllume;
  }
}
