import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsModelisationComponent } from './js-modelisation.component';

describe('JsModelisationComponent', () => {
  let component: JsModelisationComponent;
  let fixture: ComponentFixture<JsModelisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsModelisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsModelisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
