import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './config.service';
import { FilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UsersResultsComponent } from './users-results/users-results.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UsersResultsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
