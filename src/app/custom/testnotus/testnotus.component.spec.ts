import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnotusComponent } from './testnotus.component';

describe('TestnotusComponent', () => {
  let component: TestnotusComponent;
  let fixture: ComponentFixture<TestnotusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestnotusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnotusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
