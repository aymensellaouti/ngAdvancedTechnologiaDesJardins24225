import { AbstractControl, ValidationErrors } from "@angular/forms";

export const ageCinValidator = (form: AbstractControl): ValidationErrors | null => {

  const cin = form.get('cin')?.value.substring(0,2);
  const age = form.get('age')?.value;
  if(!cin || !age) return null;

  if ((age > 60 && cin <20) ||(age < 60 && cin >=20) ) return null;
  return {'ageCin': "L'age et le cin ne correspondent pas"}
}
