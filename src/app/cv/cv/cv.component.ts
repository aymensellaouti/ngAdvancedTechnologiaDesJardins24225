import { Component, inject, Inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, of } from "rxjs";
import { LOGGER_SERVICE_TOKEN } from "src/app/tokens/logger-service.token";
import { TodoService } from "src/app/todo/service/todo.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  constructor(
    @Inject(LOGGER_SERVICE_TOKEN)
    private loggers: LoggerService[],
    private logger: LoggerService,
    private toastr: ToastrService,
    private todoService: TodoService,
  ) {
    loggers.forEach(logger => logger.logger('cc'));
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: () => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`
    //       Attention!! Les données sont fictives, problème avec le serveur.
    //       Veuillez contacter l'admin.`);
    //   },
    // });
    this.cvs = this.acr.snapshot.data['cvs'];
    this.cvService.selectedCv$.subscribe({ next: (cv) => this.selectedCv = cv });

    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
  }
}
