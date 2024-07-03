import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular 18";
  stateName: string = "Maharashtra"
  inputType = "checkbox";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  
  isIndian: boolean = false;
  
  currentDate: Date = new Date();
  firstName = signal("Sufiyan shaikh");

  constructor() {
  }

  showAlert(messsage: string){
    alert(messsage)
  } 

  changeCourseName() {
    this.courseName = "React Js 20";
    this.firstName.set("Sachin tendulkar")
  }
}
