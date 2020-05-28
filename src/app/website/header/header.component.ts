import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
 
      $(document).scroll(function(event) {
      	var scroll=$(this).scrollTop();
      	if($(this).scrollTop()>250){
      		$('header').addClass('fixed');
      	}
      	else{
      		$('header').removeClass('fixed');
      	}
      });
});
  }

}
