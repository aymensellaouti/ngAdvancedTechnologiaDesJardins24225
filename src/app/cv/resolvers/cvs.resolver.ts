import { ResolveFn } from '@angular/router';
import { Cv } from '../model/cv';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { catchError, count, delay, of, retry } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const cvsResolver: ResolveFn<Cv[]> = (route, state) => {
  const cvService = inject(CvService);
  const toastr = inject(ToastrService);
  return cvService.getCvs().pipe(
    retry({
      delay: 1000,
      count: 3
    }),
    catchError((err) => {
      toastr.error(`
        Attention!! Les données sont fictives, problème avec le serveur.
        Veuillez contacter l'admin.`);
      return of(cvService.getFakeCvs());
    })
  );
};
