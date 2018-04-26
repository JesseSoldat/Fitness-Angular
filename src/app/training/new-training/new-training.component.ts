import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises = [{id: 1, name: 'situps'}, {id: 2, name: 'pushups'}];
  isLoading = false;
  constructor() { }

  ngOnInit() {
  }

  onStartTraining(form: NgForm) {

  }

}
