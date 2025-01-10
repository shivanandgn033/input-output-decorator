import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputchildComponent } from './inputchild.component';

describe('InputchildComponent', () => {
  let component: InputchildComponent;
  let fixture: ComponentFixture<InputchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
