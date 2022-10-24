import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsComponentComponent } from './views-component.component';

describe('ViewsComponentComponent', () => {
  let component: ViewsComponentComponent;
  let fixture: ComponentFixture<ViewsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
