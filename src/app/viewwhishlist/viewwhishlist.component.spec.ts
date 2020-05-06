import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwhishlistComponent } from './viewwhishlist.component';

describe('ViewwhishlistComponent', () => {
  let component: ViewwhishlistComponent;
  let fixture: ComponentFixture<ViewwhishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwhishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwhishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
