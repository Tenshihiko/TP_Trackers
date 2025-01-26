import { Injectable } from '@angular/core';
import { BookCard } from '../../components/books/bookcard.model';
import { LocalStorageService } from './local-storage.service';
import { UserBook } from '../models/userdata.model';

@Injectable({
    providedIn: 'root',
})
export class UserdataService {
    constructor(
        private localStorage: LocalStorageService
    ) { }


    SetBookObtained(story: BookCard) {
        let userBook = this.localStorage.getItem<UserBook>(story.id);
        if(userBook){
            userBook.obtained = story.obtained;            
        } else {
            userBook = {
                obtained: story.obtained
            }
        }
        this.localStorage.setItem(story.id, userBook);
    }
}