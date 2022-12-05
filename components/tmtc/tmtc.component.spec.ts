import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmtcComponent } from './tmtc.component';

describe('TmtcComponent', () => {
  let component: TmtcComponent;
  let fixture: ComponentFixture<TmtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmtcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
