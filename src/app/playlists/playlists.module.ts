import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistRoutingModule } from './playlist-routing.module';

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistDetailComponent
  ],
  imports: [
    SharedModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistsModule { }
