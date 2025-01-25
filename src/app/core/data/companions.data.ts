import { giftTagEnum } from "../models/enums";
import { Companion } from "../models/models";
import { Books } from "./books.data";

export class Companions {

    public static readonly Blaisdell: Companion =
        {
            id: "c_blaisdell",
            title_en: "Blaisdell",
            title_ru: "Блейсдел",
            gifttags: [giftTagEnum.Collectable, giftTagEnum.Food],
            filename: "Blaisdell.png",
            book: Books.QueenMarie,
        };
    public static readonly dEon: Companion =
        {
            id: "c_d'eon",
            title_en: "d'Eon de Beaumont",
            title_ru: "д'Эон де Бомон",
            gifttags: [giftTagEnum.Collectable, giftTagEnum.Mysterious],
            filename: "D'eon.png",
            book: Books.QueenMarie,
        };
    public static readonly Fersen: Companion =
        {
            id: "c_fersen",
            title_en: "Count Fersen",
            title_ru: "Граф Ферзен",
            gifttags: [giftTagEnum.Tool, giftTagEnum.Decor],
            filename: "Fersen.png",
            book: Books.QueenMarie,
        };
    public static readonly Gabrielle: Companion =
        {
            id: "c_gabrielle",
            title_en: "Gabrielle",
            title_ru: "Габриэль",
            gifttags: [giftTagEnum.Fun, giftTagEnum.Mysterious],
            filename: "Gabrielle.png",
            book: Books.QueenMarie,
        };
    public static readonly Lafayette: Companion =
        {
            id: "c_lafayette",
            title_en: "Marquis de Lafayette",
            title_ru: "Маркиз Лафайет",
            gifttags: [giftTagEnum.Cultural, giftTagEnum.Art],
            filename: "Lafayette.png",
            book: Books.QueenMarie,
        };
    public static readonly LouisXVI: Companion =
        {
            id: "c_louis",
            title_en: "Louis XVI",
            title_ru: "Людовик XVI",
            gifttags: [giftTagEnum.Cultural, giftTagEnum.Tool],
            filename: "Louis_XVI.png",
            book: Books.QueenMarie,
        };
    public static readonly All: Companion[] = [
        this.Blaisdell,
        this.dEon,
        this.Fersen,
        this.Gabrielle,
        this.Lafayette,
        this.LouisXVI
    ];
}