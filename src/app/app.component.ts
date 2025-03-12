import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstSignalComponent } from './signal/first-signal/first-signal.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NavbarComponent, FirstSignalComponent, NgxUiLoaderModule, RouterOutlet]
})
export class AppComponent {
  title = 'Starting Advanced Topics';
}
