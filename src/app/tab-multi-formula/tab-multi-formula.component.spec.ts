import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMultiFormulaComponent } from './tab-multi-formula.component';

describe('TabMultiFormulaComponent', () => {
  let component: TabMultiFormulaComponent;
  let fixture: ComponentFixture<TabMultiFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabMultiFormulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMultiFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
