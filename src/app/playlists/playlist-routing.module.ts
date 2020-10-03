import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistDetailGuard } from './guards/playlist-detail.guard';

const playlistRoutes: Routes = [
  {
    path: '',
    component: PlaylistsComponent,
    children: [
      {
        path: ':id',
        component: PlaylistDetailComponent,
        canActivate: [PlaylistDetailGuard]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(playlistRoutes)
  ],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
