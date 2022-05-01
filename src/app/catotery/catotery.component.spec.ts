import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatoteryComponent } from './catotery.component';

describe('CatoteryComponent', () => {
  let component: CatoteryComponent;
  let fixture: ComponentFixture<CatoteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatoteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatoteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
