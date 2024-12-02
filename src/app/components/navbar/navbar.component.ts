import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('hamburgerMenu', { static: true }) hamburgerMenu!: ElementRef;
  @ViewChild('mobileMenu', { static: true }) mobileMenu!: ElementRef;
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  ngOnInit() {
    this.hamburgerMenu.nativeElement.addEventListener('click', this.toggleMenu.bind(this));

    /**   trid to make the navbar transparent at first, then emerge on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.navbar.nativeElement.classList.add('bg-sky-600', 'shadow-lg'); // Adds dark background and shadow on scroll
      } else {
        this.navbar.nativeElement.classList.remove('bg-transparent','shadow-lg'); // Reverts to transparent when at top
      }
    });
    */
  }

  toggleMenu() {
    const menu = this.mobileMenu.nativeElement;
    menu.classList.toggle('hidden');
  }
    
}
