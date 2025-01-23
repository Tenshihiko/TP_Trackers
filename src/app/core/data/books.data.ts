import { SideStory, Story, TravelersNote } from "../models";

export class Books {

    public static readonly QueenMarie: Story = {
        id: "b_qm",
        bookType: bookType.Story,
        title_en: "Queen Marie",
        title_ru: "Королева Мария",
        scenetag: sceneTagEnum.CourtDance,
        filename: "Book_Queen_Marie.png",
    };

    public static readonly VengeanceOfTheWitch = {
        id: "b_votw",
        bookType: bookType.TravelersNote,
        title_en: 'Vengeance of the Witch',
        title_ru: 'Демен внутри меня',
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: 'Book_Vengeance_of_the_Witch.png'
    };

    public static readonly Stories: Story[] = [
        this.QueenMarie,   
    ];

    public static readonly TravellersNotes: TravelersNote[] = [
        this.VengeanceOfTheWitch,
    ]

    public static readonly SideStories: SideStory[] = [
        {
            id: "b_aotn",
            bookType: bookType.SideStory,
            title_en: 'The Affair of the Necklace',
            title_ru: 'Дело об ожерелье',
            scenetag: sceneTagEnum.CourtDance,
            filename: 'Side_Book_The_Affair_of_the_Necklace.png',
            parentbook: Books.QueenMarie            
        },
    ]


}