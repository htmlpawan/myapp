import { Component, OnInit } from '@angular/core';
import { NewseriveService } from '../newserive.service';

@Component({
  selector: 'app-studentregistraion',
  templateUrl: './studentregistraion.component.html',
  styleUrls: ['./studentregistraion.component.scss'],
  providers:[NewseriveService]
})
export class StudentregistraionComponent implements OnInit {
  text:string;
  constructor(private _newservice:NewseriveService) { }


  ngOnInit(){
    this.text =  this._newservice.paratest();
     
   }

}
