import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPlaylistCollection, IPlaylist } from '../../models';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  public playlistCollections$: Observable<IPlaylistCollection[]>;
  public activePlaylist$: Observable<IPlaylist>;

  constructor(
    private playlistService: PlaylistService,
    public route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Playlists');
    this.playlistService.getPlaylists();
    this.playlistCollections$ = this.playlistService.collections$;
  }

  toggleFavorite(id: string) {
    this.playlistService.toggleFavorite(id);
  }

}
