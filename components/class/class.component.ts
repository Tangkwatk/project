import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  classList:string[] = ['class1','class2']
  count:number = 2;

  constructor() { }

  ngOnInit(): void {
  }
  pushClass(){
    this.classList.push('class'+(this.count+1))
    this.count+=1
  }
  removeClass(index:number){
    this.classList.splice(index,1)
  }


}
