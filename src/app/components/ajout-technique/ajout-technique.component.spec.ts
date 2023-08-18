import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTechniqueComponent } from './ajout-technique.component';

describe('AjoutTechniqueComponent', () => {
  let component: AjoutTechniqueComponent;
  let fixture: ComponentFixture<AjoutTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutTechniqueComponent]
    });
    fixture = TestBed.createComponent(AjoutTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
