import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  formProduct: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    date_received: new FormControl(''),
    category: new FormControl(''),
    number: new FormControl(''),
    user: new FormControl(''),
    description: new FormControl(''),
    purchase_value: new FormControl(''),
    location: new FormControl(''),
    project: new FormControl(''),
    chasis_number: new FormControl(''),
    engine_number: new FormControl(''),
    licence_plate: new FormControl(''),
    serial_number: new FormControl(''),
    date_commissioned: new FormControl(''),
  });

  initialiseFormGroup(){
    this.formProduct.setValue({
      id: '',
      name:'',
      date_received:'',
      category:'',
      number:'',
      user:'',
      description:'',
      purchase_value:'',
      location:'',
      project:'',
      chasis_number:'',
      engine_number:'',
      licence_plate:'',
      serial_number:'',
      date_commissioned:'',
    });

  }

  populateForm(product){
    this.formProduct.setValue(product);
  }
}
