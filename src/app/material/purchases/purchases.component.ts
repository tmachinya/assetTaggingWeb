import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridNg2} from 'ag-grid-angular';
import {JarvisService} from '../../services/jarvis.service';
import {ExcelService} from '../../services/excel.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['../transactions/transactions.component.css']
})
export class PurchasesComponent implements OnInit {
  @ViewChild('logGrid') logGrid: AgGridNg2;
  private gridApi;
  private gridColumnApi;
  private dhata:any;
  columnDefs;
  sortingOrder;
  searchValue;

  constructor(
    private  Jarvis: JarvisService,
    private excel: ExcelService
  )
  {
    this.columnDefs = [
      {
        headerName: "Product Name",
        field:"product_name",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true
      },
      {
        headerName: "Product Description",
        field:"product_description",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Product Description",
        field:"supplier",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Price",
        field:"price",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Quantity",
        field:"quantity",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Transaction Date",
        field:"date",
        width:150,
        sortingOrder: ["asc","desc"]
      },
    ];
    this.sortingOrder = ["desc","asc",null]
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.Jarvis.allPurchase().subscribe(
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
    const selectedDataStringPresentation = selectedData.map( node => 'code:'+node.code + ' ' + 'supplier:'+node.supplier).join(', ');
    alert(`Selected Records are : ${selectedDataStringPresentation}`);
  }

  exportAsXLSX():void {
    this.excel.exportAsExcelFile(this.dhata, 'Transactions');
  }

  ngOnInit() {
    this.Jarvis.allPurchase().subscribe(
      data =>{
        this.dhata = data as string [];
      }
    )
  }

}
