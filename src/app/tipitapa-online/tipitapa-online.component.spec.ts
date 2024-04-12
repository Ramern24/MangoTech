import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipitapaOnlineComponent } from './tipitapa-online.component';

describe('TipitapaOnlineComponent', () => {
  let component: TipitapaOnlineComponent;
  let fixture: ComponentFixture<TipitapaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipitapaOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipitapaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
