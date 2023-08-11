import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundingComponent } from './launding.component';

describe('LaundingComponent', () => {
  let component: LaundingComponent;
  let fixture: ComponentFixture<LaundingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaundingComponent]
    });
    fixture = TestBed.createComponent(LaundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
