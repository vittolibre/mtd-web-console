import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import { StrategyService } from '../../service/strategy.service';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-mtd-strategy',
  templateUrl: './mtd-strategy.component.html',
  styleUrls: ['./mtd-strategy.component.scss']
})
export class MtdStrategyComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  @Output() checkedChange = new EventEmitter<boolean>();
  enableAll: boolean;

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
      name: {
        title: 'Nome',
        type: 'string',
      },
      enabled: {
        title: 'Abilitato',
        type: 'string',
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
      },
      scheduling: {
        title: 'Trigger',
        type: 'string',
        valuePrepareFunction: (available) => {
          return available == 'fixed' ? 'Periodico' : 'Evento';
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleziona...',
            list: [
              { value: 'fixed', title: 'Periodico' },
              { value: 'event', title: 'Evento' }
            ]
          }
        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Seleziona...',
            list: [
              { value: 'fixed', title: 'Periodico' },
              { value: 'event', title: 'Evento' }
            ]
          }
        },
      }
    },
  };

  constructor(
    private strategyService: StrategyService,
    private service: SmartTableData
  ) {
    this.strategyService.getAllStrategies().subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
  }

  toggleStatus(event){
    console.log(event)
    this.strategyService.enableAllStrategies(event).subscribe(res =>{
      this.enableAll = event
      this.strategyService.getAllStrategies().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  editStrategy(event){
    this.strategyService.updateStrategy(event.newData).subscribe(res =>{
      event.confirm.resolve();
      this.strategyService.getAllStrategies().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

}
