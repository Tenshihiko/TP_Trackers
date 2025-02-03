import { clothesTagEnum, sceneTagEnum } from "../models/enums";
import { Companion, Relic, SceneTag } from "../models/models";
import { Companions } from "./companions.data";

export class Relics {
    public static readonly PerfumeBottle: Relic = {
        id: "r_pb",
        title_en: "Perfume Bottle",
        title_ru: "Парфюмерный флакон",
        filename: "gabrielle.png",
        awaken_filename: "gabrielle_awaken.png",
        clothesTags: [clothesTagEnum.Elegant, clothesTagEnum.Charming],
        scenetag: sceneTagEnum.CourtDance,
        stars: 5,
        companion: Companions.Gabrielle,
    };
    public static readonly FlintlockPistol: Relic = {
        id: "r_fp",
        title_en: "Flintlock Pistol",
        title_ru: "Флейтлок",
        filename: "lafaette.png",
        awaken_filename: "lafaette_awaken.png",
        clothesTags: [clothesTagEnum.Warm, clothesTagEnum.Simple],
        scenetag: sceneTagEnum.CourtDance,
        stars: 4,
        companion: Companions.LouisXVI,
    };
    public static readonly EbonyViolin: Relic = {
        id: "r_ev",
        title_en: "Ebony Violin",
        title_ru: "",
        filename: "fersen.png",
        awaken_filename: "fersen_awaken.png",
        clothesTags: [clothesTagEnum.Gentle, clothesTagEnum.Grand],
        scenetag: sceneTagEnum.CourtDance,
        stars: 4,
        companion: Companions.Lafayette,
    };
    public static readonly GentlemansSword: Relic = {
        id: "r_gs",
        title_en: "Gentleman's Sword",
        title_ru: "",
        filename: "deon.png",
        awaken_filename: "deon_awaken.png",
        clothesTags: [clothesTagEnum.Simple, clothesTagEnum.Perky],
        scenetag: sceneTagEnum.CourtDance,
        stars: 3,
        companion: Companions.dEon,
    };
    public static readonly EagleCrest: Relic = {
        id: "r_ec",
        title_en: "Eagle Crest",
        title_ru: "",
        filename: "louisxvi.png",
        awaken_filename: "louisxvi_awaken",
        clothesTags:[clothesTagEnum.Noble, clothesTagEnum.Cooling],
        scenetag: sceneTagEnum.CourtDance,
        companion: Companions.LouisXVI,
        stars: 3,
    };
    public static readonly PorcelainTeacup: Relic = {
        id: "r_pt",
        title_en:"Porcelain Teacup",
        title_ru: "",
        filename: "blaisdell.png",
        awaken_filename: "blaisdell_awaken.png",
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