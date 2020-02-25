import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  events: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.service.getData(response).subscribe(data => {
        console.log(data);
        console.log(data["_embedded"].events);
        this.events = data["_embedded"].events;
      });this.search({ value: { city: "detroit" } });
    });
    
  }

  search(form: any) {
    let parameters: any = {};
    if (form.value.keyword) {
      parameters.keyword = form.value.keyword;
    }
    if (form.value.city) {
      parameters.city = form.value.city;
    }
    if (form.value.startDateTime) {
      parameters.startDateTime = form.value.startDateTime;
    }
    if (form.value.endDateTime) {
      parameters.endDateTime = form.value.endDateTime;
    }
    this.router.navigate(["search"], {
      queryParams: parameters
    });
  }
}
