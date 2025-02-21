import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { APP_ROUTES } from 'src/config/routes.config';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: APP_ROUTES.cv,
        component: CvComponent,
      },
      { path: APP_ROUTES.addCv, component: AddCvComponent, canActivate: [AuthGuard] },
      { path: APP_ROUTES.detailsCv, component: DetailsCvComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class CvRoutingModule {}
