import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from '../../services/jarvis.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AgGridNg2} from 'ag-grid-angular';
import {ExcelService} from '../../services/excel.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
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
        headerName: "Asset Number",
        field:"asset_number",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true,
        checkboxSelection: true,
        // cellRenderer: "customisedAssetCell"
      },
      {
        headerName: "Asset Name",
        field:"asset_name",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true
      },
      {
        headerName: "Last Date Audited",
        field:"date_audited",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Owner",
        field:"owner",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Status",
        field:"status",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Last Audited",
        field:"lastaudit",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Date Uploaded",
        field:"now",
        width:150,
        sortingOrder: ["asc","desc"]
      }
    ]

    this.sortingOrder = ["desc","asc",null]
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.Jarvis.allAudits().subscribe(
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
    this.excel.exportAsExcelFile(this.dhata, 'Audited Assets');
  }
  ngOnInit() {

    this.Jarvis.allAudits().subscribe(
      data =>{
        this.dhata = data as string [];
      }
    )

  }

}
