import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { APP_ROUTES } from 'src/config/routes.config';
import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        //'cv':
        path: APP_ROUTES.cv,
        children: [
          {
            path: '',
            component: CvComponent,
          },
          {
            path: APP_ROUTES.addCv,
            component: AddCvComponent,
            canActivate: [authGuard],
          },
          {
            path: APP_ROUTES.master,
            component: MasterDetailComponent,
            children: [{path: ':id', component: DetailsCvComponent}]
          },
          { path: APP_ROUTES.detailsCv, component: DetailsCvComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CvRoutingModule {}
