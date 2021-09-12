import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  constructor(private http: HttpClient) { 

  }

  getAllBottleInfos() : Observable<any[]> {
    return this.http.get<any>('bottle/bottles');
  }

  getSortedAndSortedBottleInfos(order: string, filtred: boolean) {
    return this.http.get<any>(`bottle/bottles/orderby=${order}/${filtred}`);
  }
}
