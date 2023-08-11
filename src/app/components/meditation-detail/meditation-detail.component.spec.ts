import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationDetailComponent } from './meditation-detail.component';

describe('MeditationDetailComponent', () => {
  let component: MeditationDetailComponent;
  let fixture: ComponentFixture<MeditationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeditationDetailComponent]
    });
    fixture = TestBed.createComponent(MeditationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
