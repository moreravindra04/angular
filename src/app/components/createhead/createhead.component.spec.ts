import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateheadComponent } from './createhead.component';

describe('CreateheadComponent', () => {
  let component: CreateheadComponent;
  let fixture: ComponentFixture<CreateheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateheadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
