import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([{path: '01-01', component: AppComponent}]),
  ],
  declarations: [AppComponent, HeroesComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
