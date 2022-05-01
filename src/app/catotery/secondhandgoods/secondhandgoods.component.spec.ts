import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhandgoodsComponent } from './secondhandgoods.component';

describe('SecondhandgoodsComponent', () => {
  let component: SecondhandgoodsComponent;
  let fixture: ComponentFixture<SecondhandgoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondhandgoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondhandgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
