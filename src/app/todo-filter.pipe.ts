import { PipeTransform, Pipe} from '@angular/core';
import { Task } from '../app/app.component';

@Pipe({
name: 'taskFilter'
})

export class TaskFilterPipe implements PipeTransform{
transform(taskList: Task[] , searchTask: string): Task[]{
    if(!taskList || !searchTask){
      return taskList;
    }
  
    return taskList.filter(task =>
      task.item.toLowerCase().indexOf(searchTask.toLocaleLowerCase()) !== -1);
  
  }
}