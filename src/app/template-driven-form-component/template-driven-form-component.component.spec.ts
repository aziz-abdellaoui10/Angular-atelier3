import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormComponentComponent } from './template-driven-form-component.component';

describe('TemplateDrivenFormComponentComponent', () => {
  let component: TemplateDrivenFormComponentComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormComponentComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
