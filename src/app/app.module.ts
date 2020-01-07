import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistraionComponent } from './studentregistraion/studentregistraion.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatCardModule,MatButtonModule,MatProgressBarModule } from '@angular/material';
import { CompanyModule } from './company/company.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { AddgalleryComponent } from './addgallery/addgallery.component';
import { CategoryComponent,DialogOverviewExampleDialog } from './category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentdetailsComponent,
    StudentregistraionComponent,
    PagenotfoundComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomesliderComponent,
    AddgalleryComponent,
    CategoryComponent,
    ModalComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    CompanyModule,
    NgbModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CategoryComponent],
  entryComponents: [CategoryComponent,DialogOverviewExampleDialog]
})
export class AppModule { }
