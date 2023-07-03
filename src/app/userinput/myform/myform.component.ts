import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit{

  bookingForm!: FormGroup;

  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }

  

  constructor(private fb: FormBuilder) { }
 
 
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId:new FormControl({value:'2',disabled:true},{validators:[Validators.required]}),
      guestEmail:['',[Validators.required,Validators.email]],
      checkinDate:new FormControl(''),
      bookingStatus:new FormControl(''),
      bookingAmount:new FormControl(''),
      bookingDate:new FormControl(''),
      mobileNumber:new FormControl(''),
      guestName:['',[Validators.required,Validators.minLength(3)]],
      address : this.fb.group({
      addressLine1:new FormControl(''),
      addressLine2:new FormControl(''),
      city :new FormControl(''),
      state:new FormControl(''),
      country:new FormControl(''),
      zipCode:new FormControl(''),
      }),
      guests:this.fb.array([this.fb.group({
        guestName:new FormControl(''),
        age:new FormControl(''),
      })]),
      tnc:new FormControl(false,[Validators.requiredTrue]),
  })
  }

  addBooking(){
    console.log(this.bookingForm.value);
  }

  addGuest(){
    this.guests.push(this.fb.group({
      guestName:new FormControl(''),
      age:new FormControl(''),
    }))
  }

  addPassport(){
    this.bookingForm.addControl('passportNumber',new FormControl(''));
  }

  deletePassport(){
    this.bookingForm.removeControl('passportNumber');
  }

  deleteGuest(i:number){
    this.guests.removeAt(i);
  }

  }
  

