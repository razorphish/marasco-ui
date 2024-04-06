/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MainLayoutComponent ]
    })
    .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainLayoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
