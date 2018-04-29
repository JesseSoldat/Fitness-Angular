import { Injectable } from '@angular/core';

@Injectable()
export class TrainingService {

  constructor() {}

  startExercise(selectedId: string) {
    console.log(selectedId);
    
  }

  completeExercise() {
    console.log('completed');
    
  }

  cancelExercise(progress: number) {
    console.log('canceled ', progress);
    
  }

}