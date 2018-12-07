import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConnaissanceComponent } from './js-connaissance.component';

describe('JsConnaissanceComponent', () => {
  let component: JsConnaissanceComponent;
  let fixture: ComponentFixture<JsConnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsConnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsConnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
