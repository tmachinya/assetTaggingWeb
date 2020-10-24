import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {JarvisService} from "../../../services/jarvis.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ExcelService} from "../../../services/excel.service";
import {MatDialogConfig} from "@angular/material/dialog";
import {AssetComponent} from "../../products/asset/asset.component";

@Component({
  selector: 'app-revalued-assets',
  templateUrl: './revalued-assets.component.html',
  styleUrls: ['./revalued-assets.component.css']
})
export class RevaluedAssetsComponent implements OnInit {
  assets: string [];
  infor: any;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['asset_number','name', 'category', 'value'];
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
        this.Jarvis.revalueAssets(this.infor).subscribe(
          data => {
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

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {

  }

  onDelete(id) {
    if (confirm('Are you sure you want to delete?')) {
      this.Jarvis.deleteTag(id).subscribe();
    }
  }


  exportAsXLSX() {
        this.excel.exportAsExcelFile(this.assets, 'Assets');
  }



}
