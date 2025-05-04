import { Routes } from '@angular/router';
import { PublicNavComponent } from './+navigations/public-nav/ui/public-nav.component';
import { PrivateNavComponent } from './+navigations/private-nav/ui/private-nav.component';

export const routes: Routes = [
    {
        path: "public", component: PublicNavComponent, children: [
            { path: 'home' }
        ]

    },
    {
        path: 'private', component:PrivateNavComponent, children:[]
    }
];
