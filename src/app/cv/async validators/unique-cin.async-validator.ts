import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../services/cv.service";
import { map } from "rxjs";


export const  uniqueCinValidator = (cvService:CvService): AsyncValidatorFn => {
  return (cinInput: AbstractControl) => {
    const cin  = cinInput.value;
    return cvService.selectByProperty('cin', cin).pipe(
      map(cvs => cvs.length ? {cinUniqueValidator: 'Le cin doit être unique'} : null)
    )
  }

}
