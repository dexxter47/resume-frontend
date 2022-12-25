import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from './visitor.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://resume-backend-fzmay7cuha-el.a.run.app';
   }

  getVisitors(): Observable<Visitor> {
    return this.httpClient.get<Visitor>(this.url);
  }

  updateVisitors(visitor: Visitor): void {
    visitor.count += 1;
    this.httpClient.post(this.url.concat('/update'), visitor).subscribe();
  }
}
