import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../services/jarvis.service";
import {FilterService} from "../../services/filter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RevalueService} from "../../services/revalue.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-revaluing',
  templateUrl: './revaluing.component.html',
  styleUrls: ['./revaluing.component.css']
})
export class RevaluingComponent implements OnInit {
  categories: string [];
  assets: string [];
  constructor(
    private Jarvis: JarvisService,
    public service: RevalueService,
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
    this.router.navigate(['/dashboard/revalue/1'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
  }
  onClear() {
    this.service.formFilter.reset();
    this.service.initialiseFormGroup();
    // this.dialogRef.close();
  }

}
