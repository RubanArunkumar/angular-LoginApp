import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISampleData } from './sampleData'
import { IInterestData } from './interestData'

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  private _urlContent: string = "/assets/data/sampleData.json";
  private _interestContent: string = "https://localhost:5001/api/interest-rates";
  constructor(private httpClient: HttpClient) { }

  public getDataHttpService(): Observable<ISampleData[]>
  {
    return this.httpClient.get<ISampleData[]>(this._urlContent)
                          .pipe(catchError(this.errorHandler));
  }

  public getInterestApiHttpService(): Observable<IInterestData[]>
  {
    return this.httpClient.get<IInterestData[]>(this._interestContent)
                          .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse)
  {
    return throwError(error.message || "Server Error");
  }
}