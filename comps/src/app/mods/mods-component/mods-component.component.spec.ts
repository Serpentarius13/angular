import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsComponentComponent } from './mods-component.component';

describe('ModsComponentComponent', () => {
  let component: ModsComponentComponent;
  let fixture: ComponentFixture<ModsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
