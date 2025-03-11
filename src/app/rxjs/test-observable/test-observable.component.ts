import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent implements OnDestroy {
  firstObservable$: Observable<number>;
  subscription: Subscription = new Subscription();
  // countdown = 5;
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });

    // 1er subscriber
    this.subscription.add(this.firstObservable$.subscribe({
      next: (value: number) => {console.log(value);}
    }));
    // this.firstObservable$.subscribe({
    //   next: (value: number) => this.countdown = value
    // });
    // setTimeout(() => {
      // 2nd subscriber
      this.subscription.add(this.firstObservable$
      // 5 4 3 2 1
      .pipe(
        map((value: number) => value * 3)
      // 15 12 9 6 3
      )
      .subscribe({
        next: (value: number) => {this.toaster.info('' + value);},
        complete: () => {toaster.error('BOOM !!!');},
        error: (e) => {}
      }));
    // }, 3000);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
