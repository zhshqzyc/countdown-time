import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimeComponent } from './countdown-time.component';

describe('CountdownTimeComponent', () => {
  let component: CountdownTimeComponent;
  let fixture: ComponentFixture<CountdownTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountdownTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
