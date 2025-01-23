interface IVisual{
  filename: string;
}

export abstract class Book implements IVisual{

  constructor(data?: Partial<any>) {
    if (data) Object.assign(this, data);
  }

  readonly bookType: bookType = bookType.None;
  id: string = '';
  title_en: string = '';
  title_ru: string = '';
  scenetag: sceneTagEnum = sceneTagEnum.None;
  filename: string = '';
}

export class Story extends Book {
  override bookType: bookType = bookType.Story;
}

export class SideStory extends Book {
  parentbook: Story = new Story();
  override bookType: bookType = bookType.SideStory;
}

export class TravelersNote extends Book {
  override bookType: bookType = bookType.TravelersNote;
}

export class Companion implements IVisual{
  id: string = '';
  title_en: string = '';
  title_ru: string = '';
  filename: string = '';
  gifttags: giftTagEnum[] = [];
  book: Book | null = null;
}

export class Relic implements IVisual{
  id: string = '';
  title_en: string = '';
  title_ru: string = '';
  filename: string = '';
  awaken_filename: string = '';
  clothesTags: clothesTagEnum[] = [];
  stars: number = 0;
  scenetag: sceneTagEnum = sceneTagEnum.None;
  companion: Companion = new Companion();
}

export class Gift implements IVisual{
  id: string = '';
  name: string = '';
  giftTags: string[] = [];
  filename: string = '';
  giftIngredients: string[] = [];
  stars: number = 0;
  priority: number = this.giftTags.length;
}

export class SceneTag implements IVisual{
  id: sceneTagEnum = sceneTagEnum.None;
  title_en: string = '';
  title_ru: string = '';
  filename: string = '';
}