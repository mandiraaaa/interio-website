//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-admin-categoryinside',
  templateUrl: './admin-categoryinside.component.html',
  styleUrls: ['./admin-categoryinside.component.css']
})
export class AdminCategoryinsideComponent {
  categoriessdata: any;
  constructor(private CategoriesService: CategoriesService, private httpClient: HttpClient){}

  ngOnInit():void{
    this.GetCategory();
    // this.CategoriesService.GetCategory().subscribe((response: any) =>{
    //   console.log(response);
    //   this.categoriessdata=response;
    // })
  }

  GetCategory(){
    this.CategoriesService.GetAllCategory().subscribe((response: any) =>{
        console.log(response);
        this.categoriessdata=response;
      })
  }

  DeleteOneCategory(_id:string){
    this.CategoriesService.DeleteCategory(_id).subscribe((response: any) =>{
      console.log(response);
      this.GetCategory();
    })
  }

  // DeleteOneCategory(_id: string): void {
  //   this.CategoriesService.DeleteCategory(_id);
  //   console.log('work!!!!!!!!!');
  // }
}
