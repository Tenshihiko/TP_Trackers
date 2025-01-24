import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SceneTag, Story, TravelersNote } from '../../core/models';
import { DataService } from '../../core/data.service';
import { SceneTags } from '../../core/data/scenetags.data'
import { sceneTagEnum } from '../../core/enums';
import { CommonModule } from '@angular/common';

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
  stories: Story[] = [];
  travelersNotes: TravelersNote[] = [];
  sceneFilter: sceneTagEnum | null = null;
  sceneTags: SceneTag[] = [];

  constructor(private dataService: DataService) {
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
  }

  onFilterChange(newSceneFilter: sceneTagEnum | null): void {
    this.sceneFilter = newSceneFilter;
    this.fetchData();
  }
}