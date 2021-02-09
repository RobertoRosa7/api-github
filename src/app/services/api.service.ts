import { Repositorios } from '../listagem-repositorios/repositorios.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://api.github.com/repositories";
  contributors = 'https://api.github.com/repos/' + 'full_name/' + 'contributors';


  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get<Repositorios[]>(this.url)
      .pipe(
        tap(console.log)
      );
  }
  getFullName(fullName: String): Observable<Repositorios[]> {
    // const contributorsUrl = `${this.contributors}?full_name=${fullName}`;
    // console.log(contributorsUrl)
    return this.http.get<Repositorios[]>(`https://api.github.com/repos/${fullName}`);
  }

}
