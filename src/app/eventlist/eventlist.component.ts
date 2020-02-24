import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-eventlist",
  templateUrl: "./eventlist.component.html",
  styleUrls: ["./eventlist.component.css"]
})
export class EventlistComponent implements OnInit {
  @Input() eventList: any;
  constructor(private service: ApiService) {}

  addToFavorites(favorite: any) {
    this.service.addToFavorites(favorite);
  }
  ngOnInit(): void {}
}
