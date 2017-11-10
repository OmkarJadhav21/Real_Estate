import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyaddComponent } from './propertyadd.component';

describe('PropertyaddComponent', () => {
  let component: PropertyaddComponent;
  let fixture: ComponentFixture<PropertyaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
