import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldautumnComponent } from './oldautumn.component';

describe('OldautumnComponent', () => {
  let component: OldautumnComponent;
  let fixture: ComponentFixture<OldautumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldautumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldautumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
