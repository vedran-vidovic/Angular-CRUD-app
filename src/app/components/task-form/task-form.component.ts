import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  text: string;
  day: string;
  tasks: any;

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {}

  onSubmit() {
    var regex =
      /^([1-9]|([012][0-9])|(3[01]))\-([0]{0,1}[1-9]|1[012])\-\d\d\d\d\s([0-1]?[0-9]|2?[0-3]):([0-5]\d)$/;
    if (!this.text) {
      alert('Please add a task!');
      return;
    }
    if (!this.day) {
      alert('Please add Day & Time!');
      return;
    }
    if (!regex.test(this.day)) {
      alert('Incorrect Day & Time format (needs to be dd-mm-yyy hh:mm)');
      return;
    }

    let newTask = {
      id: uuid(),
      text: this.text,
      day: this.day,
    };

    this.taskService.addTask(newTask);
    window.location.reload();
  }
}
