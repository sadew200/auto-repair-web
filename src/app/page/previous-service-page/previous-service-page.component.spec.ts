import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousServicePageComponent } from './previous-service-page.component';

describe('PreviousServicePageComponent', () => {
  let component: PreviousServicePageComponent;
  let fixture: ComponentFixture<PreviousServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousServicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
