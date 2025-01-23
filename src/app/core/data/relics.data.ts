import { Companion, Relic, SceneTag } from "../models";
import { Companions } from "./companions.data";

export class Relics {
    public static readonly PerfumeBottle: Relic = {
        id: "r_pb",
        title_en: "Perfume Bottle",
        title_ru: "Парфюмерный флакон",
        filename: "Relic_Gabrielle.png",
        awaken_filename: "Relic_Awaken_Gabrielle.png",
        clothesTags: [clothesTagEnum.Elegant, clothesTagEnum.Charming],
        scenetag: sceneTagEnum.CourtDance,
        stars: 5,
        companion: Companions.Gabrielle,
    };
    public static readonly FlintlockPistol: Relic = {
        id: "r_fp",
        title_en: "Flintlock Pistol",
        title_ru: "Флейтлок",
        filename: "Relic_Louus_XVI.png",
        awaken_filename: "Relic_Awaken_Louus_XVI.png",
        clothesTags: [clothesTagEnum.Warm, clothesTagEnum.Simple],
        scenetag: sceneTagEnum.CourtDance,
        stars: 4,
        companion: Companions.LouisXVI,
    };
    public static readonly EbonyViolin: Relic = {
        id: "r_ev",
        title_en: "Ebony Violin",
        title_ru: "",
        filename: "Relic_Fersen.png",
        awaken_filename: "Relic_Awaken_Fersen.png",
        clothesTags: [clothesTagEnum.Gentle, clothesTagEnum.Grand],
        scenetag: sceneTagEnum.CourtDance,
        stars: 4,
        companion: Companions.Lafayette,
    };
    public static readonly GentlemansSword: Relic = {
        id: "r_gs",
        title_en: "Gentleman's Sword",
        title_ru: "",
        filename: "Relic_d'Eon.png",
        awaken_filename: "",
        clothesTags: [clothesTagEnum.Simple, clothesTagEnum.Perky],
        scenetag: sceneTagEnum.CourtDance,
        stars: 3,
        companion: Companions.dEon,
    };
    public static readonly EagleCrest: Relic = {
        id: "r_ec",
        title_en: "Eagle Crest",
        title_ru: "",
        filename: "Relic_Louis_XVI.png",
        awaken_filename: "",
        clothesTags:[clothesTagEnum.Noble, clothesTagEnum.Cooling],
        scenetag: sceneTagEnum.CourtDance,
        companion: Companions.LouisXVI,
        stars: 3,
    };
    public static readonly PorcelainTeacup: Relic = {
        id: "r_pt",
        title_en:"Porcelain Teacup",
        title_ru: "",
        filename: "Relic.Blaisdell",
        awaken_filename: "",
        clothesTags: [clothesTagEnum.Grand, clothesTagEnum.Formal],
        scenetag: sceneTagEnum.CourtDance,
        stars: 3,
        companion: Companions.Blaisdell,

    };

    public static readonly All: Relic[] = [
        this.PerfumeBottle,
        this.FlintlockPistol,
        this.EbonyViolin,
        this.GentlemansSword,
        this.EagleCrest,
        this.PorcelainTeacup,
    ];
}