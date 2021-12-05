import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any;
  faTimes = faTimes;
  faEdit = faEdit;
  isOn: boolean;
  editTask: any;

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onDelete(task: any) {
    this.taskService.deleteTask(task);
    window.location.reload();
  }

  onEdit(task: any) {
    this.editTask = task;
    console.log(this.editTask);
  }

  toggle() {
    if (!this.isOn) this.isOn = true;
    else if (this.isOn) this.isOn = false;
  }
}
