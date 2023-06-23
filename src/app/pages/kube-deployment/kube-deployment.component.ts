import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KubeDeploymentService } from '../../service/kube-deployment.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-kube-deployment',
  templateUrl: './kube-deployment.component.html',
  styleUrls: ['./kube-deployment.component.scss']
})
export class KubeDeploymentComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        addable: false,
        editable: false,
        sortDirection: 'asc',
      },
      name: {
        title: 'Nome',
        type: 'string',
      },
      namespace: {
        title: 'Namespace',
        type: 'string',
      }
    },
  };

  constructor(
    private deploymentService: KubeDeploymentService,
    private service: SmartTableData
  ) {
      this.deploymentService.findAll().subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
  }

  createDeployment(event){
    this.deploymentService.createDeployment(event.newData).subscribe(res =>{

      event.confirm.resolve();
      this.source.refresh();
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  editDeployment(event){
    this.deploymentService.updateDeployment(event.newData).subscribe(res =>{
      event.confirm.resolve();
      this.deploymentService.findAll().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  deleteDeployment(event){
    console.log(event.data.id)
    this.deploymentService.deleteDeployment(event.data.id).subscribe(res =>{
    event.confirm.resolve();
      this.source.refresh();
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

}
