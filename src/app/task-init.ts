import { v4 as uuid } from 'uuid';

export class Init {
  load() {
    if (
      localStorage.getItem('tasks') === null ||
      localStorage.getItem('tasks') == undefined
    ) {
      console.log('No tasks found... Creating...');
      let tasks = [
        {
          id: 1,
          text: 'Doctors Appointment',
          day: '05-05-2021 14:30',
        },
        {
          id: 2,
          text: 'Meeting at School',
          day: '05-05-2021 17:30',
        },
        {
          id: 3,
          text: 'Food Shopping',
          day: '07-05-2021 10:30',
        },
      ];

      localStorage.setItem('tasks', JSON.stringify(tasks));
      return;
    } else {
      console.log('Found tasks...');
    }
  }
}
