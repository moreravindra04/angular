import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetnoteComponent } from './budgetnote.component';

describe('BudgetnoteComponent', () => {
  let component: BudgetnoteComponent;
  let fixture: ComponentFixture<BudgetnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetnoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
