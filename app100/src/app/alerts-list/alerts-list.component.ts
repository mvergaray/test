import { Component, OnInit } from '@angular/core';
import { NgGrid } from 'angular4-grid';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.css']
})
export class AlertsListComponent implements OnInit {
  tableConfig: object;
  methods: object;
  selectedRecords: object;

  settings2 = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  cars: Object[];

  selectedCar: Object;

  displayDialog: boolean;


  selectCar(car: Object) {
      this.selectedCar = car;
      this.displayDialog = true;
  }

  onDialogHide() {
      this.selectedCar = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
