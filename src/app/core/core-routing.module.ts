import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const coreRoutes: Routes = [
  {
    path: 'playlists',
    loadChildren: () => import('../playlists/playlists.module').then(mod => mod.PlaylistsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'playlists'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
