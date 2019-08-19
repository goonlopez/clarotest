import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaroComponent } from './claro.component';

describe('ClaroComponent', () => {
  let component: ClaroComponent;
  let fixture: ComponentFixture<ClaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
