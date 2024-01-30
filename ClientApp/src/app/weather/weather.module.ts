
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../material.module';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './component/weather/weather.component';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [],
  exports: [WeatherComponent]
})
export class WeatherModule { }
