import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';
import { AddCvComponent } from './add-cv/add-cv.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvCardComponent } from './cv-card/cv-card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule, CvRoutingModule, ReactiveFormsModule, ListComponent,
        ItemComponent,
        DetailsCvComponent,
        CvCardComponent,
        AddCvComponent,
        CvComponent,
        EmbaucheComponent,
        DefaultImagePipe,
        AutocompleteComponent],
})
export class CvModule {}
