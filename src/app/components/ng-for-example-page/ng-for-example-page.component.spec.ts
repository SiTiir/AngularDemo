import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForExamplePageComponent } from './ng-for-example-page.component';

describe('NgForExamplePageComponent', () => {
  let component: NgForExamplePageComponent;
  let fixture: ComponentFixture<NgForExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForExamplePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
