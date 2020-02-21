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
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.service
        .getData(
          response.startDateTime,
          response.endDateTime,
          response.keyword,
          response.city
        )
        .subscribe(data => {
          // this.data = data;
          console.log(data);
        });
    });
  }

  search(form: NgForm) {
    this.router.navigate(["search"], {
      queryParams: {
        startDateTime: form.value.startDateTime,
        endDateTime: form.value.endDateTime,
        keyword: form.value.keyword,
        city: form.value.city
      }
    });
  }
}
