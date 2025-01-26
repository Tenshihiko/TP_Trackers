import { Injectable } from '@angular/core';
import { BookCard } from '../../components/books/bookcard.model';
import { LocalStorageService } from './local-storage.service';
import { IObtained, UserBook } from '../models/userdata.model';

@Injectable({
    providedIn: 'root',
})
export class UserdataService {
    constructor(
        private localStorage: LocalStorageService
    ) { }


    SetBookObtained(card: {id: string, obtained: boolean}) {
        let userBook = this.localStorage.getItem<IObtained>(card.id);
        if(userBook){
            userBook.obtained = card.obtained;            
        } else {
            userBook = {
                obtained: card.obtained
            }
        }
        this.localStorage.setItem(card.id, userBook);
    }
}