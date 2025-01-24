import { clothesTagEnum } from "../enums";

export class clothesTags{
    public static readonly pinks: clothesTags[] = [
        clothesTagEnum.Grand,
        clothesTagEnum.Charming,
        clothesTagEnum.Warm,
        clothesTagEnum.Perky,
        clothesTagEnum.Gentle,
        clothesTagEnum.Sweet,
        clothesTagEnum.Casual,
    ];

    public static readonly blues: clothesTagEnum[] = [
        clothesTagEnum.Simple,
        clothesTagEnum.Formal,
        clothesTagEnum.Cooling,
        clothesTagEnum.Elegant,
        clothesTagEnum.Noble,
        clothesTagEnum.Fierce,
        clothesTagEnum.Sensible,
    ];
}