import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMultiTallyComponent } from './tab-multi-tally.component';

describe('TabMultiTallyComponent', () => {
  let component: TabMultiTallyComponent;
  let fixture: ComponentFixture<TabMultiTallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabMultiTallyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMultiTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
