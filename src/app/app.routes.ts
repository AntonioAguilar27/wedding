import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';


export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: '**', redirectTo: 'main', pathMatch: 'full'}
];