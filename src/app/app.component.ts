import { Component } from '@angular/core';

interface Task {
  item: string;
  completed: boolean;
  // deleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TODO List';
  taskInput: string;
  searchTask: string;
  completed: boolean=false;
  delete: null;

  isMarginTB: boolean = true;
  isRounded: boolean = true;
  isPink: boolean = true; 
  isPadded: boolean = true; 
  isWidths: boolean = true; 
  isflexElem: boolean = true;
  isflexRow: boolean = true;
  isStrike: boolean = false;

  taskList: Task[] = [
    {item: 'Walk the dog', completed:false},
    {item: 'Go to the store', completed:true},
    {item: 'Get Gas', completed:false},
    {item: 'Wash the car', completed:false}
  ];
filteredTask = [...this.taskList];

isCompleted: boolean = false;
isDeleted: boolean =  false;

classList: Object = {
marginTB: this.isMarginTB,  
pink: this.isPink,
round: this.isRounded,
padding: this.isPadded,
widths: this.isWidths,
flexing: this.isflexElem,
flexrow: this.isflexRow,
strike: this.isStrike
};

addTask = () => {
    const newTask = {
      item: this.taskInput,
      completed: this.isCompleted,
      delete: this.isDeleted
    };
    this.taskList.push(newTask);
    this.taskInput = null;
    this.filter(this.searchTask);
 }

completeTask = (i: number)=>{
    this.taskList[i]['completed'] = !this.taskList[i]['completed'];
}

undoComplete = (i) => {
  if(this.taskList[i]['completed'] === true){
    this.taskList[i]['completed'] = !this.taskList[i]['completed'];
  }
}

filter = (searchTask: string) => {
  const searchString = searchTask ? searchTask.toLowerCase() : '';
  this.filteredTask = this.taskList.filter(i => i.item.toLowerCase().includes(searchString));
  // this.taskList.item.includes(this.filteredTask)
}

  delListItem = (i) => {
    this.taskList.splice(i, 1);
    this.filter(this.searchTask)
  }
  
}