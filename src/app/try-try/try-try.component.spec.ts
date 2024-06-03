import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryTryComponent } from './try-try.component';

describe('TryTryComponent', () => {
  let component: TryTryComponent;
  let fixture: ComponentFixture<TryTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TryTryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TryTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
