import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // get posts
  getPosts(range, order): Observable<any>{
    const startDate =  this.getFormatedData(range.value.start, environment.START_DAY)
    const endDate = this.compareEndDate(range.value.end) ? moment(range.value.end).format('YYYY-MM-DDTHH:mm:ss') : this.getFormatedData(range.value.end, environment.END_DAY)
    const url = `${environment.API_URL}/posts?start=${startDate}&end=${endDate}&order=${order}`;
    return this.http.get<any>(url)
  }

  // format date
  getFormatedData(date: Date, hours:string): string {
    return moment(date).format('YYYY-MM-DDT'+hours)
  }

  // check if current day
  compareEndDate(date:Date):boolean{
    if(moment(new Date()).format('YYYY-MM-DD') == moment(date).format('YYYY-MM-DD')){
      return true
    }
    return false
  }
}
