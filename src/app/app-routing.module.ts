import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { EventlistComponent } from "./eventlist/eventlist.component";
import { BucketComponent } from "./bucket/bucket.component";

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "eventlist", component: EventlistComponent },
  { path: "bucket", component: BucketComponent },
  { path: "**", component: SearchComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
