import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MenubarComponent } from './components/menubar/menubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonsComponent, MenubarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  onButtonClick() {
    console.log('Button was clicked!');
  }
  title = 'Balayan-Website';
  ImagePath: string;
  images: string[] = [
    'assets/images/Maja-Blanca.png',
    'assets/images/Taho.png',
    'assets/images/Rattan-Basket.png',
    'assets/images/Cafe-Interior.png',
  ];
  currentIndex: number = 0;

  constructor() {
    // Check if window is defined
    if (typeof window !== 'undefined') {
      this.ImagePath = window.location.origin + '/assets/images/Maja-Blanca.png';
    } else {
      this.ImagePath = ''; // Provide a fallback or handle accordingly
    }
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Navigate to the next slide
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
