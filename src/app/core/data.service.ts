import { Injectable } from "@angular/core";
import { Books } from "./data/books.data";
import { Companions } from "./data/companions.data";
import { Relics } from "./data/relics.data";
import { Companion, Relic, SideStory, Story, TravelersNote } from "./models";
import { Observable, of } from "rxjs";
import { clothesTagEnum, giftTagEnum, sceneTagEnum } from "./enums";

@Injectable({
    providedIn: 'root',
  })
export class DataService{

    getStories(scene: sceneTagEnum | null): Observable<Story[]> {
        if(!scene)
            return of(Books.Stories);

        return of(Books.Stories.filter(story => story.scenetag === scene));
    }

    getSideStoriesByStory(storyId: string): Observable<SideStory[]>{
        return of(Books.SideStories.filter(sidestory => sidestory.parentbook.id === storyId));
    }

    getTravelersNotes(scene: sceneTagEnum | null): Observable<TravelersNote[]>{
        if(!scene)
            return of(Books.TravellersNotes);
        return of(Books.TravellersNotes.filter(story => story.scenetag === scene));
    }

    getRelics(stars: number | null, scene: sceneTagEnum | null, clothetags: clothesTagEnum[] | null): Observable<Relic[]>{
        return of(Relics.All.filter(relic =>
            (!stars || relic.stars === stars)
            && (!scene || relic.scenetag === scene)
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
}