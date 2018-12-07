import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlModelisationComponent } from './sql-modelisation.component';

describe('SqlModelisationComponent', () => {
  let component: SqlModelisationComponent;
  let fixture: ComponentFixture<SqlModelisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlModelisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlModelisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
