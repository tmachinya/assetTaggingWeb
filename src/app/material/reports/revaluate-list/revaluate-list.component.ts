import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../../services/jarvis.service";
import {ExcelService} from "../../../services/excel.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-revaluate-list',
  templateUrl: './revaluate-list.component.html',
  styleUrls: ['../../../admins/admin-list/admin-list.component.css']
})
export class RevaluateListComponent implements OnInit {
  assets: string [];
  infor: any;
  count: any;
  var1: number=0.0
  var2: number= 0.0
  var3: number=0.0
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['asset_number','name','description','value','cost','variance'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Jarvis: JarvisService,
    private excel: ExcelService

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
        this.infor = JSON.parse(params.data)
        this.Jarvis.allRevaluation(this.infor).subscribe(data => {
            this.assets = data as string [];
            this.listData = new MatTableDataSource(this.assets);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
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
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onEdit(row: any) {

  }

  onDelete(id: any) {

  }
}
