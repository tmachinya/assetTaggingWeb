import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RevalueService {

  constructor() { }

  formFilter: FormGroup = new FormGroup({
    category: new FormControl(''),
    percent: new FormControl(''),
  });

  initialiseFormGroup(){
    this.formFilter.setValue({
      category:'',
      percent:'',
    });

  }

}
