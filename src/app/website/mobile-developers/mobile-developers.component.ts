import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-mobile-developers',
  templateUrl: './mobile-developers.component.html',
  styleUrls: ['./mobile-developers.component.css']
})
export class MobileDevelopersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 15,
      padding:10,
      nav: true,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
 
  }

}
