import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarDropmenuComponent } from './topbar-dropmenu.component';

describe('TopbarDropmenuComponent', () => {
  let component: TopbarDropmenuComponent;
  let fixture: ComponentFixture<TopbarDropmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarDropmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarDropmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
