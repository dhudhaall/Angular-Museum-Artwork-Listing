import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../Models/department.model';
import { ArtWork } from '../Models/object.model';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  params: HttpParams | undefined
  api = environment.apiendpoint
  constructor(private http: HttpClient) {
  }


  getDepartmentList():Observable<Department[]> {

    return this.http.get(this.api + '/departments').pipe(map((res:any) => res.departments)) as Observable<Department[]>;
  }

  getObjectList(departmentId:number) {
    let params={departmentIds: departmentId}
    return this.http.get(this.api + '/objects', {params:params});
  }

  getObject(objectID:number):Observable<ArtWork> {
    return this.http.get(this.api + `/objects/${objectID}`) as Observable<ArtWork>
  }

  
}
