import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlConnaissanceComponent } from './sql-connaissance.component';

describe('SqlConnaissanceComponent', () => {
  let component: SqlConnaissanceComponent;
  let fixture: ComponentFixture<SqlConnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlConnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlConnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
