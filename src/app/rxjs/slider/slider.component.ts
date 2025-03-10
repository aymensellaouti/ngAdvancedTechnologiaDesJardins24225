import { Component, Input } from "@angular/core";
import { Observable, map, startWith, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() timer = 1500;
  @Input() size = 150;
  @Input() imagePaths = [
    "as.jpg",
    "cv.png",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
  ];

  /* Todo : Créer le flux permettant de générer les images à afficher dans le slider */
  paths$: Observable<string> = timer(0, this.timer).pipe(
    startWith(0),
    // 0 1 2 3 4 5 6 7 8
    map( index => this.imagePaths[index % this.imagePaths.length])
    // image1, image2, image3, image4
  );
}
