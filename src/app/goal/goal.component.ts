import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Visit Musium', 'Watching news in the evening times', new Date(2020, 3, 19)),
    new Goal(2, 'Going to movieshowroom', 'Buying some stuff at the market', new Date(2020, 5, 2)),
    new Goal(3, 'Meeting Alma on Zoom', 'Driving for swimming pool', new Date(2021, 1, 2)),
    new Goal(4, 'Get to libray for reading', 'Looking for papers to copy', new Date(2021, 2, 1)),
  ];
  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }
  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
