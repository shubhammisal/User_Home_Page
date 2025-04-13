import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { WidgetsComponent } from './widgets/widgets.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [WidgetsComponent,UsersComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public FirstName : any;
  public LastName : any;

  constructor(private dataService : DataService){

  }

  ngOnInit(){
    this.FirstName = "Olivia"
    this.LastName = "Rhye"
    localStorage.setItem("firstName",this.FirstName)
    localStorage.setItem("lastName",this.LastName)
  }

}

