import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistraionComponent } from './studentregistraion/studentregistraion.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { AddgalleryComponent } from './addgallery/addgallery.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    path:'student',
    children:[
      {path:'',component:StudentComponent},
      {
        path:'studentdetails', component:StudentdetailsComponent
      },
      {
        path:'studentregistraion', component:StudentregistraionComponent
      }
    ]
  },
  {
    path:'home-slider', component:HomesliderComponent
  },
  {
    path:'add-gallery', component:AddgalleryComponent
  },
  {
    path:'category', component:CategoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
