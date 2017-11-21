import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPropertyComponent } from './detail-property.component';

describe('DetailPropertyComponent', () => {
  let component: DetailPropertyComponent;
  let fixture: ComponentFixture<DetailPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
