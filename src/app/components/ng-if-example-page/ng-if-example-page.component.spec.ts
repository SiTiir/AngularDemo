import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExamplePageComponent } from './ng-if-example-page.component';

describe('NgIfExamplePageComponent', () => {
  let component: NgIfExamplePageComponent;
  let fixture: ComponentFixture<NgIfExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfExamplePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
