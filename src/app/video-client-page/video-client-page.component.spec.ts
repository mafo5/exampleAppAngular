import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoClientPageComponent } from './video-client-page.component';

describe('VideoClientPageComponent', () => {
  let component: VideoClientPageComponent;
  let fixture: ComponentFixture<VideoClientPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoClientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
