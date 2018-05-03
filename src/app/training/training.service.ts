import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {

  constructor(private db: AngularFirestore) {}

  fetchAvailableExercises() {
    this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(d => {
          const { doc } = d.payload;
          return {
            id: doc.id,
            name: doc.data().name,
            duration: doc.data().duration,
            calories: doc.data().calories
          };
        });
      })
      .subscribe((exercises: Exercise[]) => {
        console.log(exercises);
      }, err => {

      });
  }

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
