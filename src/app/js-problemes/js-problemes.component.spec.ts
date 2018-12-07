import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsProblemesComponent } from './js-problemes.component';

describe('JsProblemesComponent', () => {
  let component: JsProblemesComponent;
  let fixture: ComponentFixture<JsProblemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsProblemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsProblemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
