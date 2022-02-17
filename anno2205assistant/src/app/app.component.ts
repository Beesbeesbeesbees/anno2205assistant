import { Component, ViewChild } from '@angular/core';
import { DifficultyComponent } from './difficulty/difficulty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DifficultyComponent) difficultyComponent!: DifficultyComponent;

  difficultyOpen = true;

  toggleDifficultyComponent() {
    this.difficultyOpen = !this.difficultyOpen;
  }
}
