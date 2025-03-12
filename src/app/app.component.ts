import { ApplicationRef, Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Starting Advanced Topics';
  ngxService = inject(NgxUiLoaderService);
  router = inject(Router);
  appRef = inject(ApplicationRef);
  constructor() {
    // this.router.events.subscribe({
    //   next: (event) => {
    //     if (event instanceof NavigationStart) {
    //       // lancer le spinner
    //       this.ngxService.start();
    //     } else if (
    //       event instanceof NavigationEnd ||
    //       event instanceof NavigationCancel ||
    //       event instanceof NavigationError
    //     ) {
    //       // fermer le spinner
    //       this.ngxService.stop();
    //     }
    //   }
    // })
  }
}
