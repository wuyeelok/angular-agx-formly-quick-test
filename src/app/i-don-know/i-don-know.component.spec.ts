import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDonKnowComponent } from './i-don-know.component';

describe('IDonKnowComponent', () => {
  let component: IDonKnowComponent;
  let fixture: ComponentFixture<IDonKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IDonKnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IDonKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
