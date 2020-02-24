import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { EventlistComponent } from "./eventlist/eventlist.component";
import { HeaderComponent } from "./header/header.component";
import { BucketComponent } from "./bucket/bucket.component";

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "header", component: HeaderComponent },
  { path: "eventlist", component: EventlistComponent },
  { path: "**", component: SearchComponent },
  { path: "bucket", component: BucketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
