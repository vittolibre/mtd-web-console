import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtdStrategyComponent } from './mtd-strategy.component';

describe('MtdStrategyComponent', () => {
  let component: MtdStrategyComponent;
  let fixture: ComponentFixture<MtdStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtdStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtdStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
