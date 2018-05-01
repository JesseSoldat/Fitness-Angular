import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator  } from '@angular/material';

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = [
      { id: 'crunches', name: 'Crunches', duration: 30, calories: 8, date: new Date(), state: 'completed' },
      { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15, date: new Date(), state: 'completed' },
      { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18, date: new Date(), state: 'cancelled' },
      { id: 'burpees', name: 'Burpees', duration: 60, calories: 8, date: new Date(), state: 'completed' }
    ];
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
