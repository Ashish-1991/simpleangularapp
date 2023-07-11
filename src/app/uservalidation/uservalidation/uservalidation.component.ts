import { Component, OnInit } from '@angular/core';
import { UservalidationserviceService } from '../service/uservalidationservice.service';
import { TokenBean } from '../tokenbean';
import { LocalStorageService } from '../service/local-storage.service';



@Component({
  selector: 'app-uservalidation',
  templateUrl: './uservalidation.component.html',
  styles: [
  ]
})
export class UservalidationComponent implements OnInit {

  tokenObj: TokenBean = new TokenBean;


  ngOnInit(): void {


  }

  constructor(private userValService: UservalidationserviceService, private localService: LocalStorageService) {

  }

  login() {
    console.log("i am in login method")
    this.getData();
    
  }

  getData() {
    this.userValService.login().subscribe(data => {
      this.tokenObj.token = data.token as string;
      this.localService.saveData("token", this.tokenObj.token);
      console.log(this.localService.getData("token") as string);
    });
  }

}
