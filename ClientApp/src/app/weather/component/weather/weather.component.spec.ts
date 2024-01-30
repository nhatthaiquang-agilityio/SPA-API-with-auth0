import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../../../../environments/environment';
import { WeatherService } from '../../services/weather.service';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { AppMaterialModule } from 'src/app/material.module';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let router: Router;

  let loader: HarnessLoader;
  let service: WeatherService;

  let newrelicMock: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports:[
        AppMaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AuthModule.forRoot({
          domain: env.auth.domain,
          clientId: env.auth.clientId
        }),
        HttpClientTestingModule
      ],
      providers: [
        { provide : WeatherService, usevalue: newrelicMock }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    service = TestBed.get(WeatherService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });

});
