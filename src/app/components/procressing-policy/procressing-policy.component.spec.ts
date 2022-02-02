import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcressingPolicyComponent } from './procressing-policy.component';

describe('ProcressingPolicyComponent', () => {
  let component: ProcressingPolicyComponent;
  let fixture: ComponentFixture<ProcressingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcressingPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcressingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
