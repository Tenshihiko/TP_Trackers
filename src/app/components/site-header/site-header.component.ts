import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'tpt-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  imports:[CommonModule, RouterModule]
})
export class SiteHeaderComponent {
  menuOpen = false;

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(){
    if(!this.localStorageService.hasKey('tpt-testdata')){
      this.localStorageService.setItem('tpt-testdata', {test:"test"});
    }
  }

  // Метод для экспорта данных
  exportData() {
    console.log('Экспорт данных');
    this.localStorageService.exportAll().subscribe({
      next: (jsonData) => {
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, 'localStorageData.json');  // Скачиваем файл
      },
      error: (err) => console.error('Ошибка при экспорте данных', err),
    });
  }

  // Метод для импорта данных
  importData() {
    console.log('Импорт данных');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.click();

    fileInput.onchange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input?.files?.[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const json = reader.result as string;
          this.localStorageService.importAll(json).subscribe({
            next: () => console.log('Данные успешно импортированы'),
            error: (err) => console.error('Ошибка при импорте данных', err),
          });
        };
        reader.readAsText(file);
      }
    };
    this.refreshPage();
    this.toggleMenu();    
  }

  // Метод для очистки данных
  clearData() {
    console.log('Стереть данные');
    this.localStorageService.clear();
    
    this.refreshPage();
    this.toggleMenu();
  }

  refreshPage(){
    //TODO implement!
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openMenu() {
    this.menuOpen = true; // Открыть меню при наведении
  }

  closeMenu() {
    this.menuOpen = false; // Закрыть меню, когда курсор уходит
  }
}
