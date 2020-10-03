import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { PlaylistDetailGuard } from './playlist-detail.guard';

describe('PlaylistDetailGuard', () => {
  let guard: PlaylistDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(PlaylistDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
