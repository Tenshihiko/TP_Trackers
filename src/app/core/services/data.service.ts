import { Injectable } from "@angular/core";
import { Books } from "../data/books.data";
import { Companions } from "../data/companions.data";
import { Relics } from "../data/relics.data";
import { Book, Cat, Companion, Relic, SideStory, Story, TravelersNote } from "../models/models";
import { Observable, of } from "rxjs";
import { clothesTagEnum, giftTagEnum, sceneTagEnum, catTypeEnum } from "../models/enums";
import { BookCard } from "../../components/books/bookcard.model";
import { MappingService } from "./mapping.service";
import { UserdataService } from "./userdata.service";
import { UserBook, UserCat } from "../models/userdata.model";
import { LocalStorageService } from "./local-storage.service";
import { Cats } from "../data/cats.data";
import { CatCard } from "../../components/cats/catcard.model";

@Injectable({
    providedIn: 'root',
  })
export class DataService{
    
    constructor(
        private mapper:MappingService,
        private localStorage: LocalStorageService,
    ){

    }

    getStories(scene: sceneTagEnum): Observable<BookCard[]> {
        return this.getBookCards(scene, Books.Stories);
    }

    getSideStoriesByStory(storyId: string): Observable<SideStory[]>{
        return of(Books.SideStories.filter(sidestory => sidestory.parentbook.id === storyId));
    }

    getTravelersNotes(scene: sceneTagEnum ): Observable<BookCard[]>{
        return this.getBookCards(scene, Books.TravellersNotes);
    }

    getSideStories(scene: sceneTagEnum): Observable<BookCard[]>{
        return this.getBookCards(scene, Books.SideStories);
    }

    getBookCards(scene: sceneTagEnum, bookset: Book[]): Observable<BookCard[]>{
        let filteredBooks = bookset.filter(story => 
            scene === (sceneTagEnum.None as sceneTagEnum) || story.scenetag === scene);
        let storyCards = this.mapper.mapArray<Book,BookCard>(filteredBooks, BookCard);

        storyCards.forEach(story =>
            story.obtained = this.localStorage.getItem<UserBook>(story.id)?.obtained ?? false
        );

        return of(storyCards);
    }

    getRelics(stars: number | null, scene: sceneTagEnum | null, clothetags: clothesTagEnum[] | null): Observable<Relic[]>{
        return of(Relics.All.filter(relic =>
            (!stars || stars == 0 || relic.stars === stars)
            && (!scene || scene === (sceneTagEnum.None as sceneTagEnum) || relic.scenetag === scene)
            && (!clothetags || clothetags.length == 0
                || ((clothetags.length < 1 || relic.clothesTags.find(ct => ct === clothetags[0]))
                && (clothetags.length < 2 || relic.clothesTags.find(ct => ct === clothetags[1]))))
        ));
    }

    getCompanions(bookid: string | null, gifttags: giftTagEnum[] | null): Observable<Companion[]>{
        return of(Companions.All.filter(companion => 
        (!bookid || companion.book?.id === bookid)
        && (!gifttags || gifttags.length == 0
            || ((gifttags.length < 1 || companion.gifttags.find(gt => gt === gifttags[0]))
            && (gifttags.length < 2 || companion.gifttags.find(gt => gt === gifttags[1]))))
        ));
    }

    getCatCards(type: catTypeEnum): Observable<CatCard[]>{
        let cats = Cats.All_TableSorted.filter(cat => type === catTypeEnum.None as catTypeEnum ||  cat.type === type);
        let catcards = this.mapper.mapArray<Cat, CatCard>(cats, CatCard);

        catcards.forEach(cat =>
            cat.obtained = this.localStorage.getItem<UserCat>(cat.id)?.obtained ?? false
        );
        return of(catcards);
    }
}