import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Quote } from '../models/quote';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  randomPersonUrl: string = 'https://randomuser.me/api/';
  randomQuoteUrl: string = "https://type.fit/api/quotes";

  constructor(private http: HttpClient) {
    
  }
  
  getRandomPerson(): Observable<Person> {
    let observable = this.http.get<Person>(this.randomPersonUrl);
    console.log(observable);
    return observable;
  }
  
  getRandomQuote(): Observable<Quote[]> {
    let observable = this.http.get<Quote[]>(this.randomPersonUrl);
    observable.forEach((quote) => console.log(quote));
    return observable;
  }
}
