import { Component, OnInit } from '@angular/core';
import { FaqsComponent } from "../faqs/faqs.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    FaqsComponent,
    FooterComponent
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent implements OnInit{

  ngOnInit(): void {
    const tabs = document.querySelectorAll<HTMLElement>('.tab');
    const contents = document.querySelectorAll<HTMLElement>('.tab-content')
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        const targetId = tab.id.replace('Tab', 'Content');
  
        // Hide all content divs
        contents.forEach((content) => {
          content.classList.add('hidden');
        });
  
        // Remove active class from all tabs
        tabs.forEach((t) => {
          t.classList.remove('text-white', 'bg-blue-600');
          t.classList.add('text-gray-500');
        });
  
        // Show the target content
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.remove('hidden');
        }
  
        // Add active class to the clicked tab
        tab.classList.add('text-white', 'bg-blue-600');
        tab.classList.remove('text-gray-500');
      });
    });
  }
}
