import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RateBoxComponent} from './rate-box/rate-box.component';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [RateBoxComponent],
  exports: [
    RateBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RateBoxModule {
}
