import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceptanceCriteriaModule } from './features/acceptance-criteria/acceptance-criteria.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AcceptanceCriteriaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
