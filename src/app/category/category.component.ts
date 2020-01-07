import { Component, OnInit, Inject } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{NewseriveService} from '../newserive.service'
import { Subject } from 'rxjs';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[NewseriveService]
})


export class CategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: any = [];
  dtTrigger: any = new Subject();
  animal: string;
  name: string;
  error: string;
  i:number;
  constructor(private router: Router,public dialog: MatDialog, private _newservice: NewseriveService) { }

  ngOnInit() {
    console.log("test");
    this.getSmartphones();
  }
  
 

  showModal(){
    this.router.navigate(['/home-slider']);
  }

  editoption(i: number,mode:string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      panelClass:this.newMethod(),
      data: {alldata: this.persons[i], ids:i,state:mode}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed test');
      this.fetchajax(); 
    });
  }

  fetchajax(){
    this._newservice.getSmartphone()
    .subscribe(data => {
      this.persons = data;
      console.log(data);
       });
  }

   getSmartphones(): void  {
    this._newservice.getSmartphone()
      .subscribe(data => {
        this.persons = data;
        console.log(data);
        this.dtTrigger.next();
      });
  }


  private newMethod(): string | string[] {
    return 'category-overlay';
  }

  
  deleteoption(id: number) {
    if (confirm('Are you sure want to delete?')) {
      this._newservice.deleteCate(id).subscribe(
        res => {
          console.log(res);
          this._newservice.getSmartphone()
          .subscribe(data => {
            this.persons = data;
            console.log(data);
            });
        },
        error => this.error = error
      );
    }
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialog {
  title:string;
  id:number;
  error: string;
  uploadError: string;
  persons: any = [];
  titleset:string;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData, private _newservice: NewseriveService, private router: Router) {
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  console.log(this.data);
    if(this.data['state']=='edit'){
    this.title = this.data['alldata']['name'];
    this.id = this.data['alldata']['id'];
    this.titleset = "Edit";
    }
    else{
      this.id = 0;
      this.titleset = "Add";
    }
  }

  submitdata()
  {
    const formData = new FormData();
    formData.append('category_name', this.title);
    this._newservice.updateBlog(formData, +this.id).subscribe(
      res => {
        if (res.status === 'error') {
          this.uploadError = res.message;
        } else {
          this.dialogRef.close();
        }
      },
      error => this.error = error
    );

  }

}
