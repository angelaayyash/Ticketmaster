import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-bucket",
  templateUrl: "./bucket.component.html",
  styleUrls: ["./bucket.component.css"]
})
export class BucketComponent implements OnInit {
  favorites: any[] = [];
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavorites();
  }
  deleteFavorite(index: number) {
    this.service.deleteFavorite(index);
  }
}
