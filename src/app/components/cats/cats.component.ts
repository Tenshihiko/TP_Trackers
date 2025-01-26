import { Component } from '@angular/core';
import { CatCard } from './catcard.model';
import { DataService } from '../../core/services/data.service';
import { UserdataService } from '../../core/services/userdata.service';
import { Cats } from '../../core/data/cats.data';
import { catTypeEnum } from '../../core/models/enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tpt-cats',
  imports: [
      CommonModule
    ],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss',
})
export class CatsComponent {
  regularCats: CatCard[] = [];
  shortCats: CatCard[] = [];
  thinCats: CatCard[] = [];

  constructor(    
        private dataService: DataService,
        private userdataService:UserdataService,
        
  ) {   
    
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getCatCards(catTypeEnum.Regular).subscribe((cats) =>{
      this.regularCats = cats;
    });

    this.dataService.getCatCards(catTypeEnum.Short).subscribe((cats) =>{
      this.shortCats = cats;
    });

    this.dataService.getCatCards(catTypeEnum.Thin).subscribe((cats) =>{
      this.thinCats = cats;
    });
  }

    toggleObtained(cat: CatCard) {    
      cat.obtained = !cat.obtained;    
      this.userdataService.SetBookObtained(cat);
    }
}
