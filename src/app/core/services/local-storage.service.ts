import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() { }

    // Создание или обновление значения
    setItem<T>(key: string, value: T): void {
        try {
            const jsonValue = JSON.stringify(value);
            localStorage.setItem(key, jsonValue);
        } catch (error) {
            console.error(`Ошибка при сохранении ключа "${key}" в localStorage:`, error);
        }
    }

    // Чтение значения
    getItem<T>(key: string): T | null {
        try {
            const jsonValue = localStorage.getItem(key);
            return jsonValue ? (JSON.parse(jsonValue) as T) : null;
        } catch (error) {
            console.error(`Ошибка при чтении ключа "${key}" из localStorage:`, error);
            return null;
        }
    }

    // Удаление значения
    removeItem(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Ошибка при удалении ключа "${key}" из localStorage:`, error);
        }
    }

    // Очистка всех данных
    clear(): void {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Ошибка при очистке localStorage:', error);
        }
    }

    // Проверка существования ключа
    hasKey(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    // Экспорт всех данных из localStorage в JSON
    exportAll(): Observable<string> {
        return new Observable<string>((observer) => {
            try {
                const data: Record<string, string> = {};
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key) {
                        const value = localStorage.getItem(key);
                        if (value !== null) {
                            data[key] = value;
                        }
                    }
                }
                const jsonData = JSON.stringify(data, null, 2); // Форматированный JSON
                observer.next(jsonData); // Передача данных подписчику
                observer.complete(); // Завершение потока
            } catch (error) {
                observer.error('Ошибка при экспорте данных из localStorage');
            }
        });
    }

    // Импорт данных из JSON в localStorage
    importAll(json: string): Observable<void> {
        return new Observable<void>((observer) => {
            try {
                this.clear();
                const data: Record<string, string> = JSON.parse(json);
                for (const [key, value] of Object.entries(data)) {
                    localStorage.setItem(key, value);
                }
                observer.next(); // Сообщаем подписчику об успешной операции
                observer.complete(); // Завершаем поток
            } catch (error) {
                observer.error('Ошибка при импорте данных в localStorage');
            }
        });
    }
}
