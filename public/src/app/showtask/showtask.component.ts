import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {

  constructor() { }
  @Input() showtask: any;
  ngOnInit() {
    
  }

}
