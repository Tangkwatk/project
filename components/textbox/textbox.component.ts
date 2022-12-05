import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  textList: number[] = [1];



  constructor() { }

  ngOnInit(): void {
  }
  addTextbox() {
    this.textList.push((this.textList.length + 1))


  }
  removeTextbox() {
    if (this.textList.length > 1)

      this.textList.pop()




  }
}
