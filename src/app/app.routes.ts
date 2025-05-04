import { Routes } from '@angular/router';
import { PublicNavComponent } from './+navigations/public-nav/ui/public-nav.component';
import { PrivateNavComponent } from './+navigations/private-nav/ui/private-nav.component';
import { HomeComponent } from './+pages/home/ui/home.component';
import { SavesComponent } from './+pages/saves/ui/saves.component';

export const routes: Routes = [
    {
        path: "public", component: PublicNavComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', component: HomeComponent },
            { path: 'saves' , component: SavesComponent}

        ]

    },
    {
        path: 'private', component: PrivateNavComponent, children: []
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' }
];
