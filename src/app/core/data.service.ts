import { Books } from "./data/books.data";
import { clothesTags } from "./data/clothestags.data";
import { Companions } from "./data/companions.data";
import { Relics } from "./data/relics.data";
import { SideStory, Story, TravelersNote } from "./models";

export class DataService{

    getStories(scene: sceneTagEnum | null): Story[] {
        if(!scene)
            return Books.Stories;

        return Books.Stories.filter(story => story.scenetag === scene);
    }

    getSideStoriesByStory(storyId: string): SideStory[]{
        return Books.SideStories.filter(sidestory => sidestory.parentbook.id === storyId);
    }

    getTravelersNotes(): TravelersNote[]{
        return Books.TravellersNotes;
    }

    getRelics(stars: number | null, scene: sceneTagEnum | null, clothetags: clothesTagEnum[] | null){
        return Relics.All.filter(relic =>
            (!stars || relic.stars === stars)
            && (!scene || relic.scenetag === scene)
            && (!clothetags || clothetags.length == 0
                || ((clothetags.length < 1 || relic.clothesTags.find(ct => ct === clothetags[0]))
                && (clothetags.length < 2 || relic.clothesTags.find(ct => ct === clothetags[1]))))
        );
    }

    getCompanions(bookid: string | null, gifttags: giftTagEnum[] | null){
        return Companions.All.filter(companion => 
        (!bookid || companion.book?.id === bookid)
        && (!gifttags || gifttags.length == 0
            || ((gifttags.length < 1 || companion.gifttags.find(gt => gt === gifttags[0]))
            && (gifttags.length < 2 || companion.gifttags.find(gt => gt === gifttags[1]))))
        );
    }
}