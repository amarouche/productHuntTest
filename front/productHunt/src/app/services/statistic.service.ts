import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  getCollections(): Observable<any>{
    const url = `${environment.API_URL}/collections`;
    return this.http.get<any>(url)
  }

  buildData(edges){
    console.log(edges)
    let data = {
      chartLabel:[],
      chartData:[],
      chartColor:[]
    }
    edges.forEach(element => {
      data.chartLabel.push(element.node.name + ' - ' + element.node.posts.totalCount)
      data.chartData.push(element.node.posts.totalCount)
      data.chartColor.push('#' + Math.floor(Math.random()*16777215).toString(16))
    });
    console.log(data)
    return data
  }
  
}

