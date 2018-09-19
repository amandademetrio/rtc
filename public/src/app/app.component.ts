import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  
  tasks = [];
  selectedTask = null;
  newTask = {
    title: "",
    description: ""
  }
  errors = [];

  ngOnInit(){

  }
  getTasks(){
    console.log("getting all tasks");
    let obs = this._httpService.getTasks();
    obs.subscribe(data => {
      console.log("Got the data", data);
      if(data['message'] == "Success"){
        this.tasks = data['tasks'];
        console.log("what is this.tasks?", this.tasks);
      }
      else {
        console.log("we have an error");
      }
    })
   
  }
  showTaskInfo(task){
    console.log("What's the task?", task);
    this.selectedTask = task;
  }
  postForm(){
    this.errors = [];
    console.log("what's the new task?", this.newTask);
    let obs = this._httpService.createTask(this.newTask);
    obs.subscribe(data => {
      console.log("got data back", data);
      if(data['message'] == "Success"){
        this.newTask.title = "";
        this.newTask.description = "";
        
      }
      else {
        
        for(var key in data['error']['errors']){
          this.errors.push(data['error']['errors'][key]['message']);
        }
        console.log("errors array", this.errors)
        // console.log("We got an error on our create", data['error']['errors'])
      }
    })
  }
  
}
