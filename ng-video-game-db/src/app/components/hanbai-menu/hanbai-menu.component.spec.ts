import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanbaiMenuComponent } from './hanbai-menu.component';

describe('HanbaiMenuComponent', () => {
  let component: HanbaiMenuComponent;
  let fixture: ComponentFixture<HanbaiMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanbaiMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HanbaiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
