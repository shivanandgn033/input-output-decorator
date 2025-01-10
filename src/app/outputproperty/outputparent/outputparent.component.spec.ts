import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputparentComponent } from './outputparent.component';

describe('OutputparentComponent', () => {
  let component: OutputparentComponent;
  let fixture: ComponentFixture<OutputparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
