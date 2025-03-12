import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AuthInterceptorProvider } from './app/auth/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CvModule } from './app/cv/cv.module';
import { TodoModule } from './app/todo/todo.module';
import { AppRoutingModule } from './app/app-routing.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
          BrowserModule, FormsModule, // required animations module
          ToastrModule.forRoot(), // ToastrModule added
          CvModule, TodoModule, AppRoutingModule, NgxUiLoaderModule, ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: "registerWhenStable:30000",
        })),
        AuthInterceptorProvider,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
