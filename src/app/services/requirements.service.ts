import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../models/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  private requirementsUrl: string = 'assets/server/requirements.json';

  constructor(private http: HttpClient) { }

  getRequirements(): Observable<Requirement[]> {
     return this.http.get<Requirement[]>(this.requirementsUrl)//Componenet should subscribe not service
  }
}
