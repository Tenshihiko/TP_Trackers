import { bookType, sceneTagEnum } from "../models/enums";
import { SideStory, Story, TravelersNote } from "../models/models";

export class Books {

    public static readonly QueenMarie: Story = {
        id: "b_qm",
        bookType: bookType.Story,
        title_en: "Queen Marie",
        title_ru: "Королева Мария",
        scenetag: sceneTagEnum.CourtDance,
        filename: "Book_Queen_Marie.png",
    };

    public static readonly MagicLamp: Story = {
        id: "b_ml",
        bookType: bookType.Story,
        title_en: "Magic Lamp",
        title_ru: "Волшебная лампа",
        scenetag: sceneTagEnum.ForeignScenery,
        filename: "Book_Magic_Lamp.png",
    };

    public static readonly GothamMemoirs: Story = {
        id: "b_gm",
        bookType: bookType.Story,
        title_en: "Gotham Memoirs",
        title_ru: "Готэмские мемуары",
        scenetag: sceneTagEnum.GildedAge,
        filename: "Book_Gotham_Memoirs.png",
    };

    public static readonly SwanLake: Story = {
        id: "b_sl",
        bookType: bookType.Story,
        title_en: "Swan Lake",
        title_ru: "Лебединое озеро",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_Swan_Lake.png",
    };

    public static readonly HelenOfSparta: Story = {
        id: "b_hos",
        bookType: bookType.Story,
        title_en: "Helen of Sparta",
        title_ru: "Елена Спартанская",
        scenetag: sceneTagEnum.MagicalAdventure,
        filename: "Book_Helen_of_Sparta.png",
    };

    public static readonly RomyAndJulius: Story = {
        id: "b_raj",
        bookType: bookType.Story,
        title_en: "Romy and Julius",
        title_ru: "Роми и Юлий",
        scenetag: sceneTagEnum.AfternoonTea,
        filename: "Book_Romy_and_Julius.png",
    };

    public static readonly ShadowsOfLondon: Story = {
        id: "b_sol",
        bookType: bookType.Story,
        title_en: "Shadows of London",
        title_ru: "Тени Лондона",
        scenetag: sceneTagEnum.AfternoonTea,
        filename: "Book_Shadows_of_London.png",
    };

    public static readonly LittleWomen: Story = {
        id: "b_lw",
        bookType: bookType.Story,
        title_en: "Little Women",
        title_ru: "Маленькие женщины",
        scenetag: sceneTagEnum.AfternoonTea,
        filename: "Book_Little_Women.png",
    };

    public static readonly PhantomOfTheOpera: Story = {
        id: "b_poto",
        bookType: bookType.Story,
        title_en: "Phantom of the Opera",
        title_ru: "Призрак оперы",
        scenetag: sceneTagEnum.AfternoonTea,
        filename: "Book_Phantom_of_the_Opera.png",
    };

    public static readonly TaishoAdventures: Story = {
        id: "b_ta",
        bookType: bookType.Story,
        title_en: "Taishō Adventures",
        title_ru: "Приключения Тайсё",
        scenetag: sceneTagEnum.RomanticPoem,
        filename: "Book_Taisho_Adventures.png",
    };

    public static readonly SagaOfViera: Story = {
        id: "b_sov",
        bookType: bookType.Story,
        title_en: "Saga of Viera",
        title_ru: "Сага о Виере",
        scenetag: sceneTagEnum.MagicalAdventure,
        filename: "Book_Saga_of_Viera.png",
    };

    public static readonly TangDynastyHunter: Story = {
        id: "b_tdh",
        bookType: bookType.Story,
        title_en: "Tang Dynasty Hunter",
        title_ru: "Охотник династии Тан",
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: "Book_Tang_Dynasty_Hunter.png",
    };

    public static readonly SiwooSight: Story = {
        id: "b_ss",
        bookType: bookType.Story,
        title_en: "Si-woo's Sight",
        title_ru: "Видение Сиу",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_Siwoo_Sight.png",
    };

    public static readonly PrincessSissi: Story = {
        id: "b_ps",
        bookType: bookType.Story,
        title_en: "Princess Sissi",
        title_ru: "Принцесса Сисси",
        scenetag: sceneTagEnum.CourtDance,
        filename: "Book_Princess_Sissi.png",
    };

    public static readonly WhiteSnake: Story = {
        id: "b_ws",
        bookType: bookType.Story,
        title_en: "White Snake",
        title_ru: "Белая змея",
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: "Book_White_Snake.png",
    };

    public static readonly DancingOnIce: Story = {
        id: "b_doi",
        bookType: bookType.Story,
        title_en: "Dancing On Ice",
        title_ru: "Танцы на льду",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_Dancing_on_Ice.png",
    };

    public static readonly HaveYouSeenClaudia: Story = {
        id: "b_hysc",
        bookType: bookType.Story,
        title_en: "Have You Seen Claudia?",
        title_ru: "Вы видели Клаудию?",
        scenetag: sceneTagEnum.AstoundingEpisode,
        filename: "Book_Have_You_Seen_Claudia.png",
    };

    public static readonly WhispersOfTheRain: Story = {
        id: "b_wotr",
        bookType: bookType.Story,
        title_en: "Whispers of the Rain",
        title_ru: "Шёпот дождя",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_Whispers_of_the_Rain.png",
    };

    public static readonly Cleopatra: Story = {
        id: "b_c",
        bookType: bookType.Story,
        title_en: "Cleopatra",
        title_ru: "Клеопатра",
        scenetag: sceneTagEnum.ForeignScenery,
        filename: "Book_Cleopatra.png",
    };

    public static readonly TheSacredBeast: Story = {
        id: "b_tsb",
        bookType: bookType.Story,
        title_en: "The Sacred Beast",
        title_ru: "Священный зверь",
        scenetag: sceneTagEnum.ForeignScenery,
        filename: "Book_The_Sacred_Beast.png",
    };

    public static readonly AncientDreams: Story = {
        id: "b_ad",
        bookType: bookType.Story,
        title_en: "Ancient Dreams",
        title_ru: "Древние мечты",
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: "Book_Ancient_Dreams.png",
    };

    public static readonly GhostManor: Story = {
        id: "b_gm",
        bookType: bookType.Story,
        title_en: "Ghost Manor",
        title_ru: "Поместье призраков",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_Ghost_Manor.png",
    };

    public static readonly KingdomOfBeasts: Story = {
        id: "b_kob",
        bookType: bookType.Story,
        title_en: "Kingdom of Beasts",
        title_ru: "Королевство зверей",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_Kingdom_of_Beasts.png",
    };

    public static readonly HouseOfHorrors: Story = {
        id: "b_hoh",
        bookType: bookType.Story,
        title_en: "House of Horrors",
        title_ru: "Дом ужасов",
        scenetag: sceneTagEnum.AstoundingEpisode,
        filename: "Book_House_of_Horrors.png",
    };

    public static readonly SpringSonata: Story = {
        id: "b_ssn",
        bookType: bookType.Story,
        title_en: "Spring Sonata",
        title_ru: "Весенняя соната",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_Spring_Sonata.png",
    };

    public static readonly TrendyTimes: Story = {
        id: "b_tt",
        bookType: bookType.Story,
        title_en: "Trendy Times",
        title_ru: "Модные времена",
        scenetag: sceneTagEnum.GildedAge,
        filename: "Book_Trendy_Times.png",
    };

    public static readonly GourmetsJourney: Story = {
        id: "b_gj",
        bookType: bookType.Story,
        title_en: "Gourmet's Journey",
        title_ru: "Путешествие гурмана",
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: "Book_Gourmets_Journey.png",
    };

    public static readonly MissKittysAntiques: Story = {
        id: "b_mka",
        bookType: bookType.Story,
        title_en: "Miss Kitty's Antiques",
        title_ru: "Антиквариат мисс Китти",
        scenetag: sceneTagEnum.RomanticPoem,
        filename: "Book_Miss_Kittys_Antiques.png",
    };

    public static readonly HelasCompass: Story = {
        id: "b_hc",
        bookType: bookType.Story,
        title_en: "Hela's Compass",
        title_ru: "Компас Хелы",
        scenetag: sceneTagEnum.PhantomLight,
        filename: "Book_Helas_Compass.png",
    };

    public static readonly GoldenAge: Story = {
        id: "b_ga",
        bookType: bookType.Story,
        title_en: "Golden Age",
        title_ru: "Золотой век",
        scenetag: sceneTagEnum.CourtDance,
        filename: "Book_Golden_Age.png",
    };

    public static readonly ThePerfectStorm: Story = {
        id: "b_tps",
        bookType: bookType.Story,
        title_en: "The Perfect Storm",
        title_ru: "Идеальный шторм",
        scenetag: sceneTagEnum.AstoundingEpisode,
        filename: "Book_The_Perfect_Storm.png",
    };

    public static readonly CodeWhalefall: Story = {
        id: "b_cw",
        bookType: bookType.Story,
        title_en: "Code: Whalefall",
        title_ru: "Код: Падение кита",
        scenetag: sceneTagEnum.PhantomLight,
        filename: "Book_Code_Whalefall.png",
    };

    public static readonly MovingMountains: Story = {
        id: "b_mm",
        bookType: bookType.Story,
        title_en: "Moving Mountains",
        title_ru: "Движущиеся горы",
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: "Book_Moving_Mountains.png",
    };

    public static readonly SistersOfTheSea: Story = {
        id: "b_sos",
        bookType: bookType.Story,
        title_en: "Sisters of the Sea",
        title_ru: "Сёстры моря",
        scenetag: sceneTagEnum.MagicalAdventure,
        filename: "Book_Sisters_of_the_Sea.png",
    };

    public static readonly TheApothecary: Story = {
        id: "b_ta",
        bookType: bookType.Story,
        title_en: "The Apothecary",
        title_ru: "Аптекарь",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_The_Apothecary.png",
    };

    public static readonly LunarLegend: Story = {
        id: "b_ll",
        bookType: bookType.Story,
        title_en: "Lunar Legend",
        title_ru: "Лунная легенда",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_Lunar_Legend.png",
    };

    public static readonly TheMoraviaExpress: Story = {
        id: "b_tme",
        bookType: bookType.Story,
        title_en: "The Moravia Express",
        title_ru: "Моравский экспресс",
        scenetag: sceneTagEnum.GildedAge,
        filename: "Book_The_Moravia_Express.png",
    };

    public static readonly DominicsDisappearance: Story = {
        id: "b_dd",
        bookType: bookType.Story,
        title_en: "Dominic's Disappearance",
        title_ru: "Исчезновение Доминика",
        scenetag: sceneTagEnum.AstoundingEpisode,
        filename: "Book_Dominics_Disappearance.png",
    };

    public static readonly HeartwoodMysteries: Story = {
        id: "b_hm",
        bookType: bookType.Story,
        title_en: "Heartwood Mysteries",
        title_ru: "Тайны Хартвуда",
        scenetag: sceneTagEnum.GildedAge,
        filename: "Book_Heartwood_Mysteries.png",
    };

    public static readonly MysteriesOfZentico: Story = {
        id: "b_moz",
        bookType: bookType.Story,
        title_en: "Mysteries of Zentico",
        title_ru: "Тайны Зентико",
        scenetag: sceneTagEnum.AstoundingEpisode,
        filename: "Book_Mysteries_of_Zentico.png",
    };

    public static readonly ShowdownInGlitterRise: Story = {
        id: "b_sigr",
        bookType: bookType.Story,
        title_en: "Showdown in Glitter Rise",
        title_ru: "Схватка в Блестящем Восхождении",
        scenetag: sceneTagEnum.StarryLegend,
        filename: "Book_Showdown_in_Glitter_Rise.png",
    };

    public static readonly MagpieTower: Story = {
        id: "b_mt",
        bookType: bookType.Story,
        title_en: "Magpie Tower",
        title_ru: "Башня сороки",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_Magpie_Tower.png",
    };

    public static readonly InfiniteShimmer: Story = {
        id: "b_is",
        bookType: bookType.Story,
        title_en: "Infinite Shimmer",
        title_ru: "Бесконечное мерцание",
        scenetag: sceneTagEnum.PhantomLight,
        filename: "Book_Infinite_Shimmer.png",
    };

    public static readonly TheUndergroundCityStirringShadows: Story = {
        id: "b_tucss",
        bookType: bookType.Story,
        title_en: "The Underground City: Stirring Shadows",
        title_ru: "Подземный город: Пробуждающиеся тени",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_The_Underground_City_Stirring_Shadows.png",
    };

    public static readonly TwilightsCrown: Story = {
        id: "b_tc",
        bookType: bookType.Story,
        title_en: "Twilight's Crown",
        title_ru: "Корона сумерек",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_Twilights_Crown.png",
    };

    public static readonly OnTheRun: Story = {
        id: "b_otr",
        bookType: bookType.TravelersNote,
        title_en: "On the Run",
        title_ru: "В бегах",
        scenetag: sceneTagEnum.StyledAllOver,
        filename: "Book_On_the_Run.png",
    };

    public static readonly AliceIdealWonderland: Story = {
        id: "b_aiw",
        bookType: bookType.TravelersNote,
        title_en: "Alice: Ideal Wonderland",
        title_ru: "Алиса: Идеальная страна чудес",
        scenetag: sceneTagEnum.WondrousJourney,
        filename: "Book_Alice_Ideal_Wonderland.png",
    };

    public static readonly VengeanceOfTheWitch = {
        id: "b_votw",
        bookType: bookType.TravelersNote,
        title_en: 'Vengeance of the Witch',
        title_ru: 'Демон внутри меня',
        scenetag: sceneTagEnum.OrientalFantasy,
        filename: 'Book_Vengeance_of_the_Witch.png'
    };

    public static readonly Stories: Story[] = [
        this.QueenMarie,
        this.MagicLamp,
        this.GothamMemoirs,
        this.SwanLake,
        this.HelenOfSparta,
        this.RomyAndJulius,
        this.ShadowsOfLondon,
        this.LittleWomen,
        this.PhantomOfTheOpera,
        this.TaishoAdventures,
        this.SagaOfViera,
        this.TangDynastyHunter,
        this.SiwooSight,
        this.PrincessSissi,
        this.WhiteSnake,
        this.DancingOnIce,
        this.HaveYouSeenClaudia,
        this.WhispersOfTheRain,
        this.Cleopatra,
        this.TheSacredBeast,
        this.AncientDreams,
        this.GhostManor,
        this.KingdomOfBeasts,
        this.HouseOfHorrors,
        this.SpringSonata,
        this.TrendyTimes,
        this.GourmetsJourney,
        this.MissKittysAntiques,
        this.HelasCompass,
        this.GoldenAge,
        this.ThePerfectStorm,
        this.CodeWhalefall,
        this.MovingMountains,
        this.SistersOfTheSea,
        this.TheApothecary,
        this.LunarLegend,
        this.TheMoraviaExpress,
        this.DominicsDisappearance,
        this.HeartwoodMysteries,
        this.MysteriesOfZentico,
        this.ShowdownInGlitterRise,
        this.MagpieTower,
        this.InfiniteShimmer,
        this.TheUndergroundCityStirringShadows,
        this.TwilightsCrown,
    ];

    public static readonly TravellersNotes: TravelersNote[] = [
        this.VengeanceOfTheWitch,
        this.AliceIdealWonderland,
        this.OnTheRun,
    ];

    public static readonly SideStories: SideStory[] = [
        {
            id: "b_aotn",
            bookType: bookType.SideStory,
            title_en: 'The Affair of the Necklace',
            title_ru: 'Дело об ожерелье',
            scenetag: sceneTagEnum.CourtDance,
            filename: 'Side_Book_The_Affair_of_the_Necklace.png',
            parentbook: this.QueenMarie
        },
        {
            id: "b_asr",
            bookType: bookType.SideStory,
            title_en: "A Servant's Resolve",
            title_ru: "Решимость слуги",
            scenetag: sceneTagEnum.CourtDance,
            filename: "Side_Book_A_Servants_Resolve.png",
            parentbook: this.QueenMarie
        },
        {
            id: "b_ff",
            bookType: bookType.SideStory,
            title_en: "Figaro Fever",
            title_ru: "Лихорадка Фигаро",
            scenetag: sceneTagEnum.CourtDance,
            filename: "Side_Book_Figaro_Fever.png",
            parentbook: this.QueenMarie
        },
        {
            id: "b_apf",
            bookType: bookType.SideStory,
            title_en: "A Precious Friend",
            title_ru: "Драгоценный друг",
            scenetag: sceneTagEnum.CourtDance,
            filename: "Side_Book_A_Precious_Friend.png",
            parentbook: this.QueenMarie
        },
        {
            id: "b_tkm",
            bookType: bookType.SideStory,
            title_en: "The King's Mistress",
            title_ru: "Любовница короля",
            scenetag: sceneTagEnum.CourtDance,
            filename: "Side_Book_The_Kings_Mistress.png",
            parentbook: this.QueenMarie
        },
        {
            id: "b_fe",
            bookType: bookType.SideStory,
            title_en: "Fated Encounter",
            title_ru: "Судьбоносная встреча",
            scenetag: sceneTagEnum.CourtDance,
            filename: "Side_Book_Fated_Encounter.png",
            parentbook: this.QueenMarie
        },
        {
            id: "b_tww",
            bookType: bookType.SideStory,
            title_en: "The Western Wall",
            title_ru: "Западная стена",
            scenetag: sceneTagEnum.ForeignScenery,
            filename: "Side_Book_The_Western_Wall.png",
            parentbook: this.MagicLamp
        },
        {
            id: "b_mi",
            bookType: bookType.SideStory,
            title_en: "Mysterious Island",
            title_ru: "Таинственный остров",
            scenetag: sceneTagEnum.ForeignScenery,
            filename: "Side_Book_Mysterious_Island.png",
            parentbook: this.MagicLamp
        },
        {
            id: "b_tp",
            bookType: bookType.SideStory,
            title_en: "The Poet",
            title_ru: "Поэт",
            scenetag: sceneTagEnum.ForeignScenery,
            filename: "Side_Book_The_Poet.png",
            parentbook: this.MagicLamp
        },
        {
            id: "b_ftlof",
            bookType: bookType.SideStory,
            title_en: "For the Love of Flying",
            title_ru: "Во имя любви к полетам",
            scenetag: sceneTagEnum.GildedAge,
            filename: "Side_Book_For_the_Love_of_Flying.png",
            parentbook: this.GothamMemoirs
        },
        {
            id: "b_trr",
            bookType: bookType.SideStory,
            title_en: "The Red Rose",
            title_ru: "Красная роза",
            scenetag: sceneTagEnum.AfternoonTea,
            filename: "Side_Book_The_Red_Rose.png",
            parentbook: this.RomyAndJulius
        },
        {
            id: "b_jp",
            bookType: bookType.SideStory,
            title_en: "Jade Pillow",
            title_ru: "Нефритовая подушка",
            scenetag: sceneTagEnum.OrientalFantasy,
            filename: "Side_Book_Jade_Pillow.png",
            parentbook: this.TangDynastyHunter
        },
        {
            id: "b_ww",
            bookType: bookType.SideStory,
            title_en: "Wishful Wonderland",
            title_ru: "Желаемая страна чудес",
            scenetag: sceneTagEnum.StyledAllOver,
            filename: "Side_Book_Wishful_Wonderland.png",
            parentbook: this.SiwooSight
        },
        {
            id: "b_gm",
            bookType: bookType.SideStory,
            title_en: "General Meow",
            title_ru: "Генерал Мяу",
            scenetag: sceneTagEnum.OrientalFantasy,
            filename: "Side_Book_General_Meow.png",
            parentbook: this.GourmetsJourney
        },
        {
            id: "b_ioi",
            bookType: bookType.SideStory,
            title_en: "Illusions On Ice",
            title_ru: "Иллюзии на льду",
            scenetag: sceneTagEnum.StyledAllOver,
            filename: "Side_Book_Illusions_On_Ice.png",
            parentbook: this.DancingOnIce
        },
        {
            id: "b_eof",
            bookType: bookType.SideStory,
            title_en: "Empire of Flames",
            title_ru: "Империя огня",
            scenetag: sceneTagEnum.ForeignScenery,
            filename: "Side_Book_Empire_of_Flames.png",
            parentbook: this.TheSacredBeast
        },
        {
            id: "b_tbob",
            bookType: bookType.SideStory,
            title_en: "The Bottle of Blessings",
            title_ru: "Бутылка благословений",
            scenetag: sceneTagEnum.MagicalAdventure,
            filename: "Side_Book_The_Bottle_of_Blessings.png",
            parentbook: this.SagaOfViera
        },
        {
            id: "b_ths",
            bookType: bookType.SideStory,
            title_en: "The Heir's Secret",
            title_ru: "Тайна наследника",
            scenetag: sceneTagEnum.WondrousJourney,
            filename: "Side_Book_The_Heirs_Secret.png",
            parentbook: this.KingdomOfBeasts
        },
        {
            id: "b_tfs",
            bookType: bookType.SideStory,
            title_en: "The Fourth Story",
            title_ru: "Четвёртая история",
            scenetag: sceneTagEnum.WondrousJourney,
            filename: "Side_Book_The_Fourth_Story.png",
            parentbook: this.TheApothecary
        },
        {
            id: "b_hog",
            bookType: bookType.SideStory,
            title_en: "Hearts of Gold",
            title_ru: "Золотые сердца",
            scenetag: sceneTagEnum.OrientalFantasy,
            filename: "Side_Book_Hearts_of_Gold.png",
            parentbook: this.MovingMountains
        },
        {
            id: "b_wtml",
            bookType: bookType.SideStory,
            title_en: "Where the Magic Leads",
            title_ru: "Туда, куда ведёт магия",
            scenetag: sceneTagEnum.WondrousJourney,
            filename: "Side_Book_Where_the_Magic_Leads.png",
            parentbook: this.LunarLegend
        }
    ]
}