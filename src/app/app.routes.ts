import { Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PdfComponent } from './components/pdf/pdf.component';


export const  ROUTES: Routes = [ 
    {path: 'home',component: HomeComponent },  
    {path: 'pdf',component: PdfComponent}, 
    {path: '',pathMatch:'full', redirectTo:'home'},
    {path: '**',pathMatch:'full', redirectTo:' home'}
];
