import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUiComponent } from './news-ui.component';

describe('NewsUiComponent', () => {
  let component: NewsUiComponent;
  let fixture: ComponentFixture<NewsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
