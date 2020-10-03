import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlaylistService } from '../services/playlist.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDetailGuard implements CanActivate {

  constructor(
    private playlistService: PlaylistService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.playlistService.selectPlaylist(next.params.id).pipe(
      map(plist => !!plist ? true : this.router.createUrlTree(['/playlists']))
    );
  }

}
