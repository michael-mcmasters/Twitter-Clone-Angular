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
  amountPath: string = '?results=';

  randomQuoteUrl: string = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}

  getRandomPerson(): Person {
    let person = this.fetchRandomPerson();
    let data = null;
    //person.subscribe(val => console.log(val.results[0].gender));
    person.subscribe((val) => (data = val));
    return person;
    //console.log(data.gender);

    //let quote = this.fetchRandomQuote();
    return null;
  }

  // fetchRandomPerson(): Observable<Person> {
  //   let observable = this.http.get<Person>(this.randomPersonUrl);
  //   //console.log(observable);
  //   return observable;
  // }

  fetchRandomPerson(amount: number): Observable<Person[]> {
    let observable = this.http.get<Person>(this.randomPersonUrl + this.amountPath + amount);
    // let observable = this.http.get<Person[]>(
    //   'https://randomuser.me/api/?results=4'
    // );
    //console.log(observable);
    return observable;
  }

  fetchRandomQuote(): Observable<Quote[]> {
    let observable = this.http.get<Quote[]>(this.randomPersonUrl);
    //observable.forEach((quote) => console.log(quote));
    return observable;
  }
}
