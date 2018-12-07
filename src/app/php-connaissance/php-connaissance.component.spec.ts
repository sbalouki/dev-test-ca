import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpConnaissanceComponent } from './php-connaissance.component';

describe('PhpConnaissanceComponent', () => {
  let component: PhpConnaissanceComponent;
  let fixture: ComponentFixture<PhpConnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpConnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpConnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
