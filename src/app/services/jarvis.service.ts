import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JarvisService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  // private baseUrl = 'http://assettagging.sanganaafrica.co.zw/public/api';

  constructor(
    private http:HttpClient
  ) { }


  login(data)
  {
    return this.http.post(`${this.baseUrl}/login`,data)
  }


  //************************** start Sales**********************************//

  allEmployee()
  {
    return this.http.get(`${this.baseUrl}/sales`)
  }

  deleteEmployee(id)
  {
    return this.http.delete(`${this.baseUrl}/employee/${id}`)
  }
  addEmployee(data)
  {
    return this.http.post(`${this.baseUrl}/createStaff`,data);
  }

  updateEmployee(employee)
  {
    return this.http.put(`${this.baseUrl}/employee/${employee.id}`,employee)
  }

  //************************** end Sales****************************************//


//******************************start Purchases functions***********************//
  allPurchase()
  {
    return this.http.get(`${this.baseUrl}/purchase`)
  }

//************************************Tag Section****************************************//

  allTags(): Observable<any>{
    return this.http.get(`${this.baseUrl}/assets`)
  }
  deleteTag(id)
  {
    return this.http.delete(`${this.baseUrl}/assets/${id}`)
  }
  addTag(data)
  {
    return this.http.post(`${this.baseUrl}/assets`,data);
  }

  updateTag(asset)
  {
    return this.http.put(`${this.baseUrl}/assets/${asset.id}`,asset)
  }
  allAudits(){
    return this.http.get(`${this.baseUrl}/allAudits`)
  }

//************************************Tag Section End************************************//



//************************************Assets************************************//

  assetCategory(){
    return this.http.get(`${this.baseUrl}/category`)
  }

  depreciation(){
    return this.http.get(`${this.baseUrl}/asset_report`)
  }

  searchAssets(data)
  {
    return this.http.post(`${this.baseUrl}/search`,data);
  }
  assetHistory(data)
  {
    return this.http.post(`${this.baseUrl}/history`,data);
  }


//---------------------users start-------------------------//
  allUsers()
  {
    return this.http.get(`${this.baseUrl}/users`)
  }

  allRoles()
  {
    return this.http.get(`${this.baseUrl}/allRoles`)
  }

  updateRoles(roles)
  {
    return this.http.post(`${this.baseUrl}/editRoles`,roles);
  }


//---------------------users end---------------------------//


//************************************Assets end ************************************//

  revalueAssets(data)
  {
    return this.http.post(`${this.baseUrl}/categoryDpn`,data);
  }

}
