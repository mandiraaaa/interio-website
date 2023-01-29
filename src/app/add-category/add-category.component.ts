import { Component, OnInit } from '@angular/core';
//import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export class Categories{
  name: string;
 // _id: string;
}
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
 errormsg:any;
 successmsg:any;
 Categories: Categories = new Categories();
 categoriesForm: FormGroup;
 constructor(
  private fb: FormBuilder,
  private CategoriesService: CategoriesService, 
  private actrouter: ActivatedRoute, private router:Router
  ){}
 

  ngOnInit(): void {
    this.categoriesForm = this.fb.group({
      name: ['', Validators.required]
      //_id: ['', Validators.required]
    });
  }
  onSubmit(){
    if (!this.categoriesForm.valid) {
      return;
    }
    if (this.categoriesForm.valid){
      this.CategoriesService.CreateNewCategory(this.categoriesForm.value).subscribe((res)=>{
      console.log(res, 'data submittetd');
      this.categoriesForm.reset();
      this.successmsg = res.message;
    })
    } else{
      this.errormsg = 'SUBMIT';
    }
  }
  
}
