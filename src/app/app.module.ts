import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  imports: [
    CommonModule, 
    BrowserModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
