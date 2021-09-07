import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactInfoComponent } from './charact-info.component';

describe('CharactInfoComponent', () => {
  let component: CharactInfoComponent;
  let fixture: ComponentFixture<CharactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
