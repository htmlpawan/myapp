import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{NewseriveService} from './newserive.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[NewseriveService]
})
export class AppComponent {
  title = 'my-app';
  text:string;
  data:string = 'Nitesh';
  constructor(private router:Router, private _newservice: NewseriveService){}

    student(){
     
      this.router.navigate(['/student']);

    }
    ngOnInit(){
     this.text =  this._newservice.display();
    }

}
