import { TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
import { routes } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        AuthModule.forRoot({
          domain: env.auth.domain,
          clientId: env.auth.clientId
        }),
      ],
      providers: [
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular App');
  });
});
