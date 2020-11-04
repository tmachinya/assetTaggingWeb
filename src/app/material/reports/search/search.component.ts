import {Component, Input, OnInit} from '@angular/core';
import {JarvisService} from "../../../services/jarvis.service";
import {ProductService} from "../../../services/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FilterService} from "../../../services/filter.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categories: string [];
   assets: string [];
   reports: any [ ] =
     [
       {id:1,name:'depreciation'},
       {id:2,name:'revaluation'},
       {id:3,name:'additions'} ,
       {id:4,name:'disposals'}
     ]
  constructor(
    private Jarvis: JarvisService,
    public service: FilterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Jarvis.assetCategory().subscribe(
      data => {
        this.categories = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )
  }

  onSubmit()
  {
    let data: any = this.service.formFilter.value
    if(this.service.formFilter.value.report=='depreciation'){
      this.router.navigate(['/dashboard/accumulatedDpn'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
    }
    if(this.service.formFilter.value.report=='revaluation'){
      this.router.navigate(['/dashboard/revaluations'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
    }
    if(this.service.formFilter.value.report=='additions'){
      this.router.navigate(['/dashboard/additions'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
    }
    if(this.service.formFilter.value.report=='disposals'){
      console.log('disposals')
    }


  }
  onClear() {
    this.service.formFilter.reset();
    this.service.initialiseFormGroup();
    // this.dialogRef.close();
  }

}
