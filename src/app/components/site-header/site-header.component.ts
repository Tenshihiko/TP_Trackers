import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tpt-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  imports:[CommonModule, RouterModule]
})
export class SiteHeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openMenu() {
    this.menuOpen = true; // Открыть меню при наведении
  }

  closeMenu() {
    this.menuOpen = false; // Закрыть меню, когда курсор уходит
  }

  importData() {
    console.log('Импорт данных');
    // Добавьте вашу логику здесь
    this.toggleMenu();
  }

  exportData() {
    console.log('Экспорт данных');
    // Добавьте вашу логику здесь
    this.toggleMenu();
  }

  clearData() {
    console.log('Стереть данные');
    // Добавьте вашу логику здесь
    this.toggleMenu();
  }
}
