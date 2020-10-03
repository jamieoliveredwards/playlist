import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { IPlaylist } from '../../models';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit, OnDestroy {

  public playlist$: Observable<IPlaylist>;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.playlist$ = this.setPlaylist();
  }

  ngOnDestroy() {
    this.title.setTitle('Playlists');
  }

  private setPlaylist() {
    return this.route.params.pipe(
      switchMap(({ id }) => this.playlistService.selectPlaylist(id)),
      filter(playlist => !!playlist),
      tap(playlist => this.title.setTitle(playlist.name))
    );
  }

}
