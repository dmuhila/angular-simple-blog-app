import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostholderComponent } from './postholder.component';

describe('PostholderComponent', () => {
  let component: PostholderComponent;
  let fixture: ComponentFixture<PostholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
