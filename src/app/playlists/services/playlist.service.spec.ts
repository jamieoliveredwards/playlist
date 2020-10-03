import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PlaylistService } from './playlist.service';

const mockResponse = {
  featuredPlaylists:
  {
    name: 'Featured Playlists',
    content: [
      {
        id: 'pl.2b0e6e332fdf4b7a91164da3162127b5',
        kind: 'playlist',
        name: 'New Music Daily',
        url: 'https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?app=music\u0026at=1000l4QJ\u0026ct=330\u0026itscg=10000\u0026itsct=330',
        curator_name: 'Apple Music',
        artwork: 'https://is5-ssl.mzstatic.com/image/thumb/Features114/v4/75/59/ca/7559ca6d-69f8-a316-5420-573c0839d566/source/600x600cc.jpg'
      }
    ]
  }
};

describe('PlaylistService', () => {
  let service: PlaylistService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });
    service = TestBed.inject(PlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('on getPlaylist should return value', (done) => {
    httpClientSpy.get.and.returnValue(of(mockResponse));
    service.getPlaylists();
    service.playlists$.subscribe(plists => {
      expect(plists.length).toBe(1);
      done();
    });
  });
});
