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
  cats: CatCard[] = [];

  constructor(    
        private dataService: DataService,
        private userdataService:UserdataService,
        
  ) {   
    
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getCatCards(catTypeEnum.None).subscribe((cats) =>{
      this.cats = cats;
    });
  }

    toggleObtained(cat: CatCard) {    
      cat.obtained = !cat.obtained;    
      this.userdataService.SetBookObtained(cat);
    }
}
