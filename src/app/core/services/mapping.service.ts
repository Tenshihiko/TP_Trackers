import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MappingService {
    constructor() { }

    /**
     * Автоматический маппинг свойств с одинаковыми именами и типами
     * @param source Объект-источник
     * @param targetConstructor Конструктор класса целевого объекта
     * @returns Новый объект целевого типа с заполненными совпадающими свойствами
     */
    map<T extends object, R extends object>(source: T, targetConstructor: new () => R): R {
        let target = new targetConstructor();
        for (const key in source) {
            if (key in target && typeof source[key] === typeof target[key as unknown as keyof R]) {
                (target as any)[key as unknown as keyof R] = source[key];
            }
        }
        return target;
    }

    /**
     * Автоматический маппинг массива
     * @param sourceArray Массив объектов-источников
     * @param targetConstructor Конструктор класса целевых объектов
     * @returns Массив целевых объектов с заполненными совпадающими свойствами
     */
    mapArray<T extends object, R extends object>(sourceArray: T[], targetConstructor: new () => R): R[] {
        return sourceArray.map((source) => this.map<T, R>(source, targetConstructor));
    }
}
