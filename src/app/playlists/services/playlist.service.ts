import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IPlaylist, IPlaylistCollection, IPlaylistResponse } from '../models';

interface ICollectionMap {
  [id: string]: {
    name: string;
    playlistIds: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlists: BehaviorSubject<{ [id: string]: IPlaylist }> = new BehaviorSubject({});
  private collections: BehaviorSubject<ICollectionMap> = new BehaviorSubject({});

  public playlists$: Observable<IPlaylist[]>;
  public collections$: Observable<IPlaylistCollection[]>;

  constructor(private http: HttpClient) {
    this.collections$ = this.setCollections$();
    this.playlists$ = this.playlists.pipe(map(plists => Object.values(plists)));
  }

  getPlaylists() {
    this.http.get<IPlaylistResponse>(environment.playlistApi).pipe(
      take(1)
    ).subscribe(response => {
      const playlists = this.reduceResponseToPlaylists(response);
      const collections = this.reduceResponseToCollections(response);
      this.playlists.next({ ...this.playlists.value, ...playlists });
      this.collections.next({ ...this.collections.value, ...collections });
    });
  }

  selectPlaylist(id: string) {
    return this.playlists.pipe(
      map(playlists => playlists[id])
    );
  }

  toggleFavorite(id: string) {
    this.playlists.next({
      ...this.playlists.value,
      [id]: {
        ...this.playlists.value[id],
        favorite: !this.playlists.value[id].favorite
      }
    });
  }

  private setCollections$() {
    return combineLatest([this.playlists, this.collections]).pipe(
      map(([pLists, cols]) => Object.values(cols).map(c => ({
        ...c,
        content: c.playlistIds.map(id => pLists[id])
      })))
    );
  }

  private reduceResponseToPlaylists(apiResponse: IPlaylistResponse) {
    return Object.values(apiResponse).reduce((acc, collection) => {
      const content = collection.content.reduce((playlistsObj, playlist) => {
        return { ...playlistsObj, [playlist.id]: playlist };
      }, {});
      return { ...acc, ...content };
    }, {});
  }

  private reduceResponseToCollections(apiResponse: IPlaylistResponse) {
    return Object.entries(apiResponse).reduce((acc, [key, col]) => ({
      ...acc,
      [key]: {
        ...col,
        playlistIds: col.content.map(p => p.id)
      }
    }), {});
  }
}
