import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronometreComponent } from './chronometre.component';

describe('ChronometreComponent', () => {
  let component: ChronometreComponent;
  let fixture: ComponentFixture<ChronometreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChronometreComponent]
    });
    fixture = TestBed.createComponent(ChronometreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
