import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
 
  // gotoMain($myParam:string=''):void{
  //   const navigationDetail:string[] = ['/main']
  //   if($myParam.length){
  //     navigationDetail.push($myParam);
  //   }
  //   this.router.navigate(['/main']);
  // }

  }



