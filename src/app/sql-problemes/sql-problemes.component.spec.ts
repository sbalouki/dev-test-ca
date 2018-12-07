import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlProblemesComponent } from './sql-problemes.component';

describe('SqlProblemesComponent', () => {
  let component: SqlProblemesComponent;
  let fixture: ComponentFixture<SqlProblemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlProblemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlProblemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
