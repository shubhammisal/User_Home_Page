import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-users',
  imports: [CommonModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  public count = 0
  public isLoading = false;
  public gridCol :any;
  public gridData : any;
  public userData : any;
  public pageNumber = 1
  public pageCount = 0
  public selectAll = false
  constructor(private dataService : DataService,private modalService: NgbModal){

  }


  ngOnInit(){
    this.getUserData()
  }

  getUserData(){
    this.isLoading = true;
    this.dataService.getUserData().subscribe((res : any)=>{
      if(res){
        this.gridCol = res.grid_columns
        this.gridCol['selected'] = false
        this.gridData = res.grid_data

        this.gridData.forEach((g : any)=>{
          g['selected'] = false
        })
        this.userData = this.gridData.slice(0,(this.pageNumber * 10))
        this.pageCount = this.gridData.length / 10;
        this.count = this.gridData.length
        this.isLoading = false
      }
    })
  }

  onEdit(row:any,index:any){
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.action = 'Edit'
    modal.componentInstance.msg = `Edit User ${row.name.first_name} ${row.name.last_name}.`

    modal.result.then(
      (result)=>console.log(result),
      (reason) => console.log(reason)
    );
  }
  onDelete(row:any,index:any){
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.action = 'Delete'
    modal.componentInstance.msg = `Want to delete User ${row.name.first_name} ${row.name.last_name}.`

    modal.result.then(
      (result)=>{
        this.gridData.splice(index,1);
        let start = (this.pageNumber-1 ) * 10
        this.userData = this.gridData.slice(start,(this.pageNumber * 10))
        this.count = this.gridData.length
      },
      (reason) => console.log(reason)
    );

  }

  selectAllUsers(){
    this.selectAll = !this.selectAll
    this.gridData.forEach((g : any)=>{
      g['selected'] = this.selectAll
    })
  }

  pageChange(index : number){
    this.pageNumber = index
    let start = (this.pageNumber-1 ) * 10
    this.userData = this.gridData.slice(start,(this.pageNumber * 10))
  }
}
