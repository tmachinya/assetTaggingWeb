import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  formFilter: FormGroup = new FormGroup({
    id: new FormControl(''),
    report: new FormControl(''),
    category: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
  });

  initialiseFormGroup(){
    this.formFilter.setValue({
      id: '',
      report:'',
      category:'',
      start:'',
      end:'',
    });

  }

  populateForm(filter){
    this.formFilter.setValue(filter);
  }
}
