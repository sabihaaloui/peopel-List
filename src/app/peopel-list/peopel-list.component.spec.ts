import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopelListComponent } from './peopel-list.component';

describe('PeopelListComponent', () => {
  let component: PeopelListComponent;
  let fixture: ComponentFixture<PeopelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
