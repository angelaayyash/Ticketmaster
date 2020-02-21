import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY: string = "YfUbfjRlrVrT0XeD2J23dGBUE6xTvMJ2";
  constructor(private http: HttpClient) {}
  getData(
    startDateTime: string = "2020-02-21T00:00:00Z",
    endDateTime: string = "2020-02-28T00:00:00Z",
    keyword: string = "tigers",
    city: string = "detroit"
  ) {
    return this.http.get(
      "https://app.ticketmaster.com/discovery/v2/events.json?",
      {
        params: {
          apikey: this.API_KEY,
          startDateTime: startDateTime + "T00:00:00Z",
          endDateTime: endDateTime + "T00:00:00Z",
          keyword: keyword,
          city: city
        }
      }
    );
  }
}

// T00:00:00Z
