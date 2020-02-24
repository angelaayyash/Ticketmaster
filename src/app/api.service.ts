import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY: string = "YfUbfjRlrVrT0XeD2J23dGBUE6xTvMJ2";
  favorites: any[] = [];
  constructor(private http: HttpClient) {}

  addToFavorites(favorite: any) {
    this.favorites.push(favorite)
  }

  onDelete() {
    // this.favorites.remove()
  }
  getFavorites(){
    return this.favorites;
  }
  getData(queryParams) {
    let parameters: any = {
      size: "25",
      apikey: this.API_KEY,
      sort: "date,asc"
    };
    if (queryParams.keyword) {
      parameters.keyword = queryParams.keyword;
    }
    if (queryParams.city) {
      parameters.city = queryParams.city;
    }
    if (queryParams.startDateTime) {
      parameters.startDateTime = queryParams.startDateTime + "T00:00:00Z";
    }
    if (queryParams.endDateTime) {
      parameters.endDateTime = queryParams.endDateTime + "T00:00:00Z";
    }
    return this.http.get(
      "https://app.ticketmaster.com/discovery/v2/events.json?",
      {
        params: parameters
      }
    );
  }
}
