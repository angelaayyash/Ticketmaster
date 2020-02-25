import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-eventlist",
  templateUrl: "./eventlist.component.html",
  styleUrls: ["./eventlist.component.css"]
})
export class EventlistComponent implements OnInit {
  @Input() eventList: any;
  showIndex: number;
  constructor(private service: ApiService) {}

  addToFavorites(favorite: any) {
    this.service.addToFavorites(favorite);
  }
  showMore(index: number) {
    this.showIndex = index;
  }

  ngOnInit(): void {}
}
