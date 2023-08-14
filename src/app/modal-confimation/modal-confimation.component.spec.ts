import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfimationComponent } from './modal-confimation.component';

describe('ModalConfimationComponent', () => {
  let component: ModalConfimationComponent;
  let fixture: ComponentFixture<ModalConfimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfimationComponent]
    });
    fixture = TestBed.createComponent(ModalConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
