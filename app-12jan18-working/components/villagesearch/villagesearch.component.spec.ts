import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagesearchComponent } from './villagesearch.component';

describe('VillagesearchComponent', () => {
  let component: VillagesearchComponent;
  let fixture: ComponentFixture<VillagesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
