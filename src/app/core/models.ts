interface IVisual{
  filename: string;
}
export abstract class Book implements IVisual{
  id: string = '';
  title_en: string = '';
  title_ru: string = '';
  scenetag: string = '';
  filename: string = '';
}

export class Story extends Book {
  companions: Companion[] = [];
}

export class SideStory extends Book {
  parentbook: Story = new Story();
}

export class TravelersNote extends Book {
}

export class Companion implements IVisual{
  id: string = '';
  name: string = '';
  giftTags: string[] = [];
  filename: string = '';
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