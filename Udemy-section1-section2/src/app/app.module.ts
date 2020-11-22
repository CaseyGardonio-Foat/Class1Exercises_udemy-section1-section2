import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
  //include the path for any new components added to the declaration below

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
      //register new components here so Angular knows to look for them; include the path in an import statement above
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
