import { Injectable } from '@angular/core';
import { Init } from '../task-init';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService extends Init {
  constructor() {
    super();
    console.log('Task service works');
    this.load();
  }

  getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')!);
    return tasks;
  }

  addTask(newTask: any) {
    let tasks = JSON.parse(localStorage.getItem('tasks')!);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(task: any) {
    let tasks = JSON.parse(localStorage.getItem('tasks')!);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == task.id) {
        tasks.splice(i, 1);
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  editTask(oldTask: any, newTask: any) {
    let tasks = JSON.parse(localStorage.getItem('tasks')!);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == oldTask.id) {
        tasks[i] = newTask;
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
