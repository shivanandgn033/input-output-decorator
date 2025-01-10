import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputchildComponent } from './outputchild.component';

describe('OutputchildComponent', () => {
  let component: OutputchildComponent;
  let fixture: ComponentFixture<OutputchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
