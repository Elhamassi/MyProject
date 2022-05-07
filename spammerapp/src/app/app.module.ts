import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './elements/menu/menu.component';
import { HeaderComponent } from './elements/header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './elements/footer/footer.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
