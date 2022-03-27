import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsForDdlComponent } from './details-for-ddl.component';

describe('DetailsForDdlComponent', () => {
  let component: DetailsForDdlComponent;
  let fixture: ComponentFixture<DetailsForDdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsForDdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsForDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
