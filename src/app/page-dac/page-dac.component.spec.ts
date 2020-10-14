import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDacComponent } from './page-dac.component';

describe('PageDacComponent', () => {
  let component: PageDacComponent;
  let fixture: ComponentFixture<PageDacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
