import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {JarvisService} from "../../../services/jarvis.service";
import {ExcelService} from "../../../services/excel.service";
import {AgGridNg2} from "ag-grid-angular";

@Component({
  selector: 'app-depreciation',
  templateUrl: './depreciation.component.html',
  styleUrls: ['../../products/asset-list/asset-list.component.css']
})
export class DepreciationComponent implements OnInit {
  @ViewChild('logGrid') logGrid: AgGridNg2;
  private gridApi;
  private gridColumnApi;
  frameworkComponents;
  columnDefs;
  sortingOrder;
  searchValue;
  private dhata:any;

  constructor(
    private  Jarvis: JarvisService,
    private excel: ExcelService
  )
  {
    this.columnDefs = [
      {
        headerName: "Asset Name",
        field:"name",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true
      },
      {
        headerName: "Category",
        field:"category",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Asset Number",
        field:"number",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      // {
      //   headerName: "Description",
      //   field:"description",
      //   width:150,
      //   sortingOrder: ["asc","desc"]
      // },
      // {
      //   headerName: "Date Received",
      //   field:"date_received",
      //   width:150,
      //   sortingOrder: ["asc","desc"]
      // },
      // {
      //   headerName: "Location",
      //   field:"location",
      //   width:150,
      //   sortingOrder: ["asc","desc"]
      // },

      {
        headerName: "Cost",
        field:"purchase_value",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Depreciation",
        field:"dpnNow",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "A-Depreciation",
        field:"sum",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Net Book Value",
        field:"NBV",
        width:150,
        sortingOrder: ["asc","desc"]
      }
    ]

    this.sortingOrder = ["desc","asc",null]
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.Jarvis.depreciation().subscribe(
      data =>{
        params.api.setRowData(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  quickSearch(){
    this.gridApi.setQuickFilter(this.searchValue);
  }

  getSelectedRows(){
    const selectedNodes = this.logGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => 'asset no:'+node.asset_number + ' ' + 'asset name:'+node.asset_name).join(', ');
    alert(`Selected Records are : ${selectedDataStringPresentation}`);
  }
  exportAsXLSX():void {
    this.excel.exportAsExcelFile(this.dhata, 'All Assets');
  }
  ngOnInit() {
    this.Jarvis.depreciation().subscribe(
      data =>{
        this.dhata = data as string [];
      }
    )

  }

}
