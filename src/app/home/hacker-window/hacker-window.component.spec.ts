import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerWindowComponent } from './hacker-window.component';

describe('HackerWindowComponent', () => {
  let component: HackerWindowComponent;
  let fixture: ComponentFixture<HackerWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackerWindowComponent]
    });
    fixture = TestBed.createComponent(HackerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
