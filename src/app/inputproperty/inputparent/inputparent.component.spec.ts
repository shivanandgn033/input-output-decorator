import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputparentComponent } from './inputparent.component';

describe('InputparentComponent', () => {
  let component: InputparentComponent;
  let fixture: ComponentFixture<InputparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
