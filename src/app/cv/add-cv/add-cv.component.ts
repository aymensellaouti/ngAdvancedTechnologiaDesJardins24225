import { Component, inject, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  Validators,
  AbstractControl,
  FormGroup,
} from "@angular/forms";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { APP_ROUTES } from "src/config/routes.config";
import { CONSTANTES } from "src/config/const.config";
import { uniqueCinValidator } from "../async validators/unique-cin.async-validator";
import { ageCinValidator } from "../validators/cin-age.validator";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  router = inject(Router);

  form: FormGroup = this.formBuilder.group(
    // Les champs du formulaire
    {
      name: ['', [Validators.required]],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqueCinValidator(this.cvService)],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    // Les options du formulaire
    {
      validators: [ageCinValidator],
      asyncValidators: [],
      updateOn: 'change',
    }
  );
  constructor() {
    const savedForm = localStorage.getItem(CONSTANTES.addCvForm);
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
    this.age.valueChanges.subscribe((age) => {
      if (age < 18) this.path?.disable();
      else this.path?.enable();
    });
  }

  addCv() {
    this.cvService.addCv(this.form.value as Cv).subscribe({
      next: (cv) => {
        this.toastr.success(
          `${cv.firstname} ${cv.name} was added successfully`
        );
        this.router.navigate([APP_ROUTES.cv]);
        localStorage.removeItem(CONSTANTES.addCvForm);
        this.form.reset();
      },
      error: (err) => {
        this.toastr.error(
          `Un problème au niveau du serveur merci de contacter l'admin`
        );
      },
    });
  }

  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(
        CONSTANTES.addCvForm,
        JSON.stringify(this.form.value)
      );
    }
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
