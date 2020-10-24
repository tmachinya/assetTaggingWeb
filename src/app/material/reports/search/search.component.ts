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
    // console.log(this.service.formFilter.value)
    let data: any = this.service.formFilter.value
    this.router.navigate(['/dashboard/search/1'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
  }
  onClear() {
    this.service.formFilter.reset();
    this.service.initialiseFormGroup();
    // this.dialogRef.close();
  }

}
