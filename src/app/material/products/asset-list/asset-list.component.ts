import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from '../../../services/jarvis.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ProductService} from '../../../services/product.service';
import {ExcelService} from '../../../services/excel.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {HttpErrorResponse} from '@angular/common/http';
import {AssetComponent} from '../asset/asset.component';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  product_detail: string [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'category', 'description','user','serial_number','actions','history'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  asset_history: string [];

  constructor(
    private Jarvis:JarvisService,
    private dialog: MatDialog,
    private service: ProductService,
    private excel: ExcelService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Jarvis.allTags().subscribe(
      data =>{
        this.product_detail = data as string[];
        this.listData = new MatTableDataSource(this.product_detail);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initialiseFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(AssetComponent, dialogConfig);
  }

  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(AssetComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Are you sure you want to delete?')) {
      this.Jarvis.deleteTag(id).subscribe();
    }
  }
  history(row) :void{
    this.router.navigate(['/dashboard/history'], {queryParams: {data: JSON.stringify(row)}, skipLocationChange: true})
  }

  exportAsXLSX() {
    this.Jarvis.allTags().subscribe(
      data => {
        this.product_detail = data as string [];
        this.excel.exportAsExcelFile(this.product_detail, 'Assets');
      }
    );

  }



}
