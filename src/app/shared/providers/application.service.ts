import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Application} from '../models/application';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private readonly applicationList: Application[] = [
    {
      appID: 1,
      appKey: 'DAS',
      appName: 'DAS Application'
    },
    {
      appID: 2,
      appKey: 'DEF',
      appName: 'DEF Application'
    },
    {
      appID: 3,
      appKey: 'UNS',
      appName: 'UNS Application'
    },
    {
      appID: 4,
      appKey: 'IRV',
      appName: 'IRV Application'
    },
    {
      appID: 5,
      appKey: 'SNO',
      appName: 'SNO Application'
    },
    {
      appID: 6,
      appKey: 'KKL',
      appName: 'KKL Application'
    },
    {
      appID: 7,
      appKey: 'KIP',
      appName: 'KIP Application'
    },
    {
      appID: 8,
      appKey: 'XEL',
      appName: 'XEL Application'
    },
    {
      appID: 9,
      appKey: 'NIT',
      appName: 'NIT Application'
    },
    {
      appID: 10,
      appKey: 'OLS',
      appName: 'OLS Application'
    },
    {
      appID: 11,
      appKey: 'FEG',
      appName: 'FEG Application'
    },
    {
      appID: 12,
      appKey: 'PIH',
      appName: 'PIH Application'
    },
    {
      appID: 13,
      appKey: 'MES',
      appName: 'First Application'
    },
    {
      appID: 14,
      appKey: 'AGS',
      appName: 'AGS Application'
    },
    {
      appID: 15,
      appKey: 'BIL',
      appName: 'BIL Application'
    }
  ];

  constructor(private http: HttpClient) { }

  /**
   * Returns an list of applications
   */
  getApplicationList(): Observable<Application[]> {
    // return this.http.get<Application[]>('some-url-to-your-backend');
    return of(this.applicationList);
  }
}
