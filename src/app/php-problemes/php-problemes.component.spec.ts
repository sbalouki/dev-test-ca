import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpProblemesComponent } from './php-problemes.component';

describe('PhpProblemesComponent', () => {
  let component: PhpProblemesComponent;
  let fixture: ComponentFixture<PhpProblemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpProblemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpProblemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
