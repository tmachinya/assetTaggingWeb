import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../../services/jarvis.service";
import {ExcelService} from "../../../services/excel.service";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {
  history: string [];
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
        this.Jarvis.assetHistory(this.infor).subscribe(data => {
            this.history = data as string [];
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          })
      }

    )
  }
  exportAsXLSX() {
    this.excel.exportAsExcelFile(this.history, 'Assets');
  }

}
