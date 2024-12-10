import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FaqsComponent } from "../faqs/faqs.component";
import { RouterModule } from '@angular/router';
// import {SwiperModule} from 'swiper/angular'
// import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FooterComponent,
    FaqsComponent,
    RouterModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  constructor() {}

  @ViewChild('testimonialCarousel', { static: true }) testimonialCarousel!: HTMLDivElement;
  @ViewChild('nextButton', { static: true }) nextButton!: HTMLDivElement;
  @ViewChild('previousButton', { static: true }) previousButton!: HTMLDivElement;


  ngOnInit(): void {
    
    // // Testimonial
    // const testimonialSwiper = new Swiper(this.testimonialCarousel, {
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: this.nextButton,
    //     prevEl: this.previousButton,
    //   },
    
    //   breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 30,
    //     },
    //     1024: {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //     },
    //     1280: {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //     },
    //   },
    // });
    

    
  }

}
