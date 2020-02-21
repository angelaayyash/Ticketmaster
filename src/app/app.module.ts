import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { EventlistComponent } from "./eventlist/eventlist.component";
import { BucketComponent } from "./bucket/bucket.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    EventlistComponent,
    BucketComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
