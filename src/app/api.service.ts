import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY: string = "YfUbfjRlrVrT0XeD2J23dGBUE6xTvMJ2";
  constructor(private http: HttpClient) {}
  getData(keyword: string = "") {
    return this.http.get(
      "https://app.ticketmaster.com/discovery/v2/events.json?",
      {
        params: {
          startDateTime: "",
          endDateTime: "",
          keyword: "",
          city: []
        }
      }
    );
  }
}

// T00:00:00Z
