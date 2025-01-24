import { sceneTagEnum } from "../enums";
import { SceneTag } from "../models";

export class SceneTags{
    public static readonly CourtDance: SceneTag = {
        id: sceneTagEnum.CourtDance,
        title_en: "Court Dance",
        title_ru: "Придворные танцы",
        filename: "Scene_Stamp_Court_Dance.png"
    };
    public static readonly AfternoonTea: SceneTag = { 
        id: sceneTagEnum.AfternoonTea,
        title_en: 'Afternoon Tea',
        title_ru: 'Послеобеденный чай',
        filename: 'Scene_Stamp_Afternoon_Tea.png'
    };
    public static readonly AstoundingEpisode: SceneTag = {
        id: sceneTagEnum.AstoundingEpisode,
        title_en: 'Astounding Episode',
        title_ru: 'Поразительный эпизод',
        filename: 'Scene_Stamp_Astounding_Episode.png'
    };
    public static readonly GildedAge: SceneTag = {
        id: sceneTagEnum.GildedAge,
        title_en: 'Gilded Age',
        title_ru: 'Позолоченный век',
        filename: 'Scene_Stamp_Gilded_Age.png'
    };
    public static readonly ForeignScenery: SceneTag = {
        id: sceneTagEnum.ForeignScenery,
        title_en: 'Foreign Scenery',
        title_ru: 'Зарубежные пейзажи',
        filename: 'Scene_Stamp_Foreign_Scenery.png'
    };
    public static readonly MagicalAdventure: SceneTag = {
        id: sceneTagEnum.MagicalAdventure,
        title_en: 'Magical Adventure',
        title_ru: 'Волшебное приключение',
        filename: 'Scene_Stamp_Magical_Adventure.png'
    };
    public static readonly WondrousJourney: SceneTag = {
        id: sceneTagEnum.WondrousJourney,
        title_en: 'Wondrous Journey',
        title_ru: 'Чудесное путешествие',
        filename: 'Scene_Stamp_Wondrous_Journey.png'
    };
    public static readonly OrientalFantasy: SceneTag = {
        id: sceneTagEnum.OrientalFantasy,
        title_en: 'Oriental Fantasy',
        title_ru: 'Восточная фантазия',
        filename: 'Scene_Stamp_Oriental_Fantasy.png'
    };
    public static readonly StyledAllOver: SceneTag = {
        id: sceneTagEnum.StyledAllOver,
        title_en: 'Styled All Over',
        title_ru: 'Стилизованные все',
        filename: 'Scene_Stamp_Styled_All_Over.png'
    };
    public static readonly RomanticPoem: SceneTag = {
        id: sceneTagEnum.RomanticPoem,
        title_en: 'Romantic Poem',
        title_ru: 'Романтическая поэма',
        filename: 'Scene_Stamp_Romantic_Poem.png'
    };
    public static readonly StarryLegend: SceneTag = {
        id: sceneTagEnum.StarryLegend,
        title_en: 'Starry Legend',
        title_ru: 'Звездная легенда',
        filename: 'Scene_Stamp_Starry_Legend.png'
    };
    public static readonly PhantomLight: SceneTag = {
        id: sceneTagEnum.PhantomLight,
        title_en: 'Phantom Light',
        title_ru: 'Призрачный свет',
        filename: 'Scene_Stamp_Phantom_Light.png'
    };
    public static readonly None: SceneTag = {
        id: sceneTagEnum.None,
        title_en: 'None',
        title_ru: 'Отсутсвует',
        filename: ''
    };

    public static readonly All: SceneTag[] = [       
        SceneTags.None, 
        SceneTags.CourtDance,
        SceneTags.AfternoonTea,
        SceneTags.AstoundingEpisode,
        SceneTags.GildedAge,
        SceneTags.ForeignScenery,
        SceneTags.MagicalAdventure,
        SceneTags.WondrousJourney,
        SceneTags.OrientalFantasy,
        SceneTags.StyledAllOver,
        SceneTags.RomanticPoem,
        SceneTags.StarryLegend,
        SceneTags.PhantomLight
    ];
}