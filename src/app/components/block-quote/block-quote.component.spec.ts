import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockQuoteComponent } from './block-quote.component';

describe('BlockQuoteComponent', () => {
  let component: BlockQuoteComponent;
  let fixture: ComponentFixture<BlockQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
