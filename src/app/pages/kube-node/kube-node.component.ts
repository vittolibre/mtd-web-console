import { KubeNodeService } from './../../service/kube-node.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-kube-node',
  templateUrl: './kube-node.component.html',
  styleUrls: ['./kube-node.component.scss']
})
export class KubeNodeComponent implements OnInit {

  nodeList = [];
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
      hostname: {
        title: 'Hostname',
        type: 'string',
      },
      ipAddress: {
        title: 'Indirizzo IP',
        type: 'string',
      },
      role: {
        title: 'Ruolo',
        type: 'string',
      },
      available: {
        title: 'Disponibile',
        type: 'boolean',
        valuePrepareFunction: (available) => {
          return available == true ? 'Abilitato' : 'Disabilitato';
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleziona...',
            list: [
              { value: true, title: 'Abilitato' },
              { value: false, title: 'Disabilitato' }
            ]
          }
        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Seleziona...',
            list: [
              { value: true, title: 'Abilitato' },
              { value: false, title: 'Disabilitato' }
            ]
          }
        },
      }
    },
  };

  constructor(
    private nodeService: KubeNodeService,
    private service: SmartTableData
  ) {
    this.nodeService.getAllNodes().subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {

  }

  createNode(event) {
    this.nodeService.createNode(event.newData).subscribe(res => {
      event.confirm.resolve();
      this.source.refresh();
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  editNode(event) {
    this.nodeService.updateNode(event.newData).subscribe(res => {
      event.confirm.resolve();
      this.nodeService.getAllNodes().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  deleteNode(event) {
    this.nodeService.deleteNode(event.data.id).subscribe(res => {
      event.confirm.resolve();
      this.source.refresh();
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

}
