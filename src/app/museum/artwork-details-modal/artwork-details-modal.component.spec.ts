import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDetailsModalComponent } from './artwork-details-modal.component';

describe('ArtworkDetailsModalComponent', () => {
  let component: ArtworkDetailsModalComponent;
  let fixture: ComponentFixture<ArtworkDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
