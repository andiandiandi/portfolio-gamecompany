import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressPaneComponent } from './press-pane.component';

describe('PressPaneComponent', () => {
  let component: PressPaneComponent;
  let fixture: ComponentFixture<PressPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
