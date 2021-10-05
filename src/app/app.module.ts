import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//RUTAS 
import {ROUTES} from './app.routes'
import {RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PdfComponent,
    ProyectosComponent,
    ServiciosComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true}), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
