import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePageApplicationComponent } from './simple-page-application.component';

describe('SimplePageApplicationComponent', () => {
  let component: SimplePageApplicationComponent;
  let fixture: ComponentFixture<SimplePageApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePageApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePageApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
