import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
//import { Categories } from '../categories';

export class Categories {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent  {
  _id: string;
  name: string;
  Categories: Categories;
  editForm: any;
  categories: Categories;

  constructor(
  private fb: FormBuilder,
  private CategoriesService: CategoriesService, 
  private actrouter: ActivatedRoute, private router:Router
  ){}

  // ngOnInit(): void {
  //   this.categories = new Categories();
  //   this._id = this.router.snapshot.params['_id'];
  //   this.CategoriesService.GetSingleCategory(this._id).subscribe((res) =>{
  //     this.editForm.patchValue({
  //       _id: res.data[0]._id,
  //       name: res.data[0].name
  //     })
  //   });

  //   this.editForm = this.fb.group({
  //     _id: ['', Validators.required],
  //     name: ['', Validators.required]
  //   });
  // }
  // onSubmit(){
  //   this.CategoriesService.EditCategory(this._id, this.categories).subscribe((res) => {
  //     this.categories = new Categories();
  //     this.goToList();
  //   });
  // }
  // goToList() {
  //   this.router.navigate(['/edit-category']);
  // }
}
