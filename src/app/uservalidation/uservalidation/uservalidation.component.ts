import { Component, OnInit } from '@angular/core';
import { UservalidationserviceService } from '../service/uservalidationservice.service';
import { TokenBean } from '../tokenbean';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-uservalidation',
  templateUrl: './uservalidation.component.html',
  styles: [
  ]
})
export class UservalidationComponent implements OnInit{

  token : TokenBean[] = []; 


  ngOnInit(): void {
    

  }

  constructor(private userValService : UservalidationserviceService){
    
  }

  login(){
    console.log("i am in login method")
    // console.log(this.userValService.login());
    
    this.userValService.login().subscribe((data:any)=>{
      console.log(data);
      this.token = data;
      console.log(this.token);
    });
    
    

  }

}
