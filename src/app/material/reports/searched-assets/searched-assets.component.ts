import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../../services/jarvis.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as _ from 'lodash';
import {ExcelService} from "../../../services/excel.service";

@Component({
  selector: 'app-searched-assets',
  templateUrl: './searched-assets.component.html',
  styleUrls: ['./searched-assets.component.css']
})
export class SearchedAssetsComponent implements OnInit {
  assets: string [];
  infor: any;
  count: any;
  var1: number=0.0
  var2: number= 0.0
  var3: number=0.0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Jarvis: JarvisService,
    private excel: ExcelService

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.infor = JSON.parse(params.data)
      this.Jarvis.searchAssets(this.infor).subscribe(data => {
          this.assets = data as string [];
          this.count= this.assets.length;
          this.assets.forEach(
            (key:any, val:any)=>{
             const fig = key['purchase_value'];
             const fig1 = key['sum'];
             const  figint= parseFloat(fig);
             const  figint1= parseFloat(fig1);
             this.var2 = this.var2+figint1
             this.var1 = this.var1+figint
          }
          )

        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        })
      }

    )
  }

  calculation(){
    console.log(this.assets)
  }
  exportAsXLSX() {
        this.excel.exportAsExcelFile(this.assets, 'Assets');
      }






}
