import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  activeSection = 'home';

  private readonly sectionIds = ['home', 'about', 'menu', 'gallery', 'location'];

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  private updateActiveSection(): void {
    if (typeof document === 'undefined') {
      return;
    }

    const activationLine = 130;
    let currentSection = 'home';

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);

      if (section && section.getBoundingClientRect().top <= activationLine) {
        currentSection = sectionId;
      }
    }

    this.activeSection = currentSection;
  }
}
