import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('hamburgerMenu', { static: true }) hamburgerMenu!: ElementRef
  @ViewChild('mobileMenu', { static: true }) mobileMenu!: ElementRef
  @ViewChild('navbar', { static: true }) navbar!: ElementRef

  // scrolling position affect navbar
  @HostListener('window:scroll',['$event'])
  onWindowScroll(event:Event):void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
    console.log('Scroll position: ',scrollPosition)

    if(scrollPosition == 0){
      this.navbar.nativeElement.classList.remove('fixed' ,'absolute','inset-x-0', 'top-0', 'z-30', 'mx-auto' ,'w-full', 'max-w-screen-md','bg-sky/10' ,'py-3', 'shadow', 'backdrop-blur-lg', 'md:rounded-3xl', 'lg:max-w-screen-xl', 'md:top-3', 'lg:top-3')
      this.navbar.nativeElement.classList.remove('sticky'); // Reverts to default when at top
    } else if (scrollPosition > 100){
      this.navbar.nativeElement.classList.add('fixed' ,'absolute','inset-x-0', 'top-0', 'z-30', 'mx-auto' ,'w-full', 'max-w-screen-md','bg-sky/10' ,'py-3', 'shadow', 'backdrop-blur-lg', 'md:rounded-3xl', 'lg:max-w-screen-xl', 'md:top-3'), 'lg:top-3'; // make navbar sticky and transparent on scroll
      this.navbar.nativeElement.classList.add('sticky')
    }
  }
      
}
