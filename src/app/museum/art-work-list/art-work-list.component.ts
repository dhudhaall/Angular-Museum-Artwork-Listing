import { Component, OnInit } from '@angular/core';
import { ArtWork } from 'src/app/shared/Models/object.model';
import { MuseumService } from 'src/app/shared/services/museum.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Department } from 'src/app/shared/Models/department.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ArtworkDetailsModalComponent } from '../artwork-details-modal/artwork-details-modal.component';
@Component({
  selector: 'app-art-work-list',
  templateUrl: './art-work-list.component.html',
  styleUrls: ['./art-work-list.component.scss']
})
export class ArtWorkListComponent implements OnInit {
  departmentsList:Department[] =[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="/assets/images/next.png">', '<img src="/assets/images/prev.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  modalRef:BsModalRef |undefined;

  constructor(private museumService:MuseumService, private spinner:NgxSpinnerService, private modalService:BsModalService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.departmentList();
  }


  departmentList(){
    this.museumService.getDepartmentList().subscribe(res=>{
      this.departmentsList = res;

      this.departmentsList.forEach(dep=>{
        this.getOjectIDList(dep);
      })
       
    })
  }

  getOjectIDList(department:Department){
    this.museumService.getObjectList(department.departmentId).subscribe((res:any)=>{
          let objectIdList:[] =  res['objectIDs'];
          objectIdList.slice(0, 10).map(i => {
            this.museumService.getObject(i).subscribe(res=>{
              if(!department.objects){
                department.objects = [];
              }
              department.objects.push(res);
              this.spinner.hide();
          })
        });
         
    })
  }

  openDetailPopup(item:ArtWork){

    const initialState: ModalOptions<any> = {
      initialState: {
        modalData:item
      },
      class: 'modal-lg'
    };
    this.modalRef = this.modalService.show(ArtworkDetailsModalComponent, initialState);

  }


}
