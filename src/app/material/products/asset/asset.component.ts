import { Component, OnInit } from '@angular/core';
import {JarvisService} from '../../../services/jarvis.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductService} from '../../../services/product.service';
import {MatDialogRef} from '@angular/material/dialog';
import * as _ from 'lodash';
import {Router} from "@angular/router";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  products: string [];
  categories: string [];

  constructor(
    private Jarvis: JarvisService,
    public service: ProductService,
    public dialogRef: MatDialogRef<AssetComponent>,
    public router:Router
  ) {

  }

  ngOnInit() {
    this.Jarvis.allTags().subscribe(
      data => {
        this.products = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )

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
    console.log(this.service.formProduct.value);
    if(!this.service.formProduct.get('id').value)
    {
      this.Jarvis.addTag(_.omit(this.service.formProduct.value,['id'])).subscribe();
      this.service.formProduct.reset();
    } else{
      this.Jarvis.updateTag(this.service.formProduct.value).subscribe();
    }
    this.onClose();
  }

  onClear() {
    this.service.formProduct.reset();
    this.service.initialiseFormGroup();
    this.dialogRef.close();
  }

  onClose() {
    this.service.formProduct.reset();
    this.service.initialiseFormGroup();
    this.dialogRef.close();
  }

}
