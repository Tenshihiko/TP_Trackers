import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SceneTag} from '../../core/models/models';
import { DataService } from '../../core/services/data.service';
import { SceneTags } from '../../core/data/scenetags.data'
import { sceneTagEnum } from '../../core/models/enums';
import { CommonModule } from '@angular/common';
import { BookCard } from './bookcard.model';
import { UserdataService } from '../../core/services/userdata.service';

@Component({
  selector: 'tpt-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [
    CommonModule,
    FormsModule,    
  ],
})
export class BooksComponent implements OnInit {
  stories: BookCard[] = [];
  travelersNotes: BookCard[] = [];
  sidestories: BookCard[] = [];
  sceneFilter: sceneTagEnum = sceneTagEnum.None;
  sceneTags: SceneTag[] = [];

  constructor(
    private dataService: DataService,
    private userdataService:UserdataService
  ) {
    this.sceneTags = SceneTags.All;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getStories(this.sceneFilter).subscribe(stories => {
      this.stories = stories;
    });

    this.dataService.getTravelersNotes(this.sceneFilter).subscribe(notes => {
      this.travelersNotes = notes;
    });

    this.dataService.getSideStories(this.sceneFilter).subscribe(sidestories => {
      this.sidestories = sidestories;
    });
  }

  onFilterChange(newSceneFilter: sceneTagEnum): void {
    this.sceneFilter = newSceneFilter;
    this.fetchData();
  }

  toggleObtained(story: BookCard) {    
    story.obtained = !story.obtained;    
    this.userdataService.SetBookObtained(story);
  }
  
}