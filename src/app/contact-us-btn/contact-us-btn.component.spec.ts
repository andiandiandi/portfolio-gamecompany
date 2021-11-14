import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsBtnComponent } from './contact-us-btn.component';

describe('ContactUsBtnComponent', () => {
  let component: ContactUsBtnComponent;
  let fixture: ComponentFixture<ContactUsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
