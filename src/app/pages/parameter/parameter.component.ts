import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ParameterService } from '../../service/parameter.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: {
      add: false,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        addable: false,
        editable: false,
        sortDirection: 'asc',
      },
      key: {
        title: 'Chiave',
        type: 'string',
      },
      value: {
        title: 'Valore',
        type: 'string',
      }
    }
  };

  constructor(
    private parameterService: ParameterService,
    private service: SmartTableData
  ) { }

  ngOnInit(): void {
    this.parameterService.findAll().subscribe((data) => {
      this.source.load(data);
    });
  }

  editParameter(event){
    this.parameterService.updateStrategy(event.newData).subscribe(res =>{
      event.confirm.resolve();
      this.parameterService.findAll().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

}
