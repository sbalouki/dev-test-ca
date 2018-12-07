import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpModelisationComponent } from './php-modelisation.component';

describe('PhpModelisationComponent', () => {
  let component: PhpModelisationComponent;
  let fixture: ComponentFixture<PhpModelisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpModelisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpModelisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
