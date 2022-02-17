import { Component, EventEmitter, Output } from '@angular/core';
import { Difficulty } from 'src/domain/difficulty';
import { DifficultyPresetsService } from 'src/domain/difficulty-presets';

@Component({
  selector: 'difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent {
  constructor(public difficultyPresets: DifficultyPresetsService) { }

  @Output() onChange = new EventEmitter<Difficulty>();
  @Output() onToggle = new EventEmitter();

  difficulty: Difficulty = this.difficultyPresets.easy;
  isOpen: boolean = true;

  ngOnInit() {
    this.setVeteran();
  }

  setDifficulty(difficulty: Difficulty) {
    this.difficulty = difficulty;
    this.emitChange();
  }

  setEasy() {
    this.setDifficulty(this.difficultyPresets.easy);
  }

  setMedium() {
    this.setDifficulty(this.difficultyPresets.medium);
  }

  setExpert() {
    this.setDifficulty(this.difficultyPresets.expert);
  }

  setVeteran() {
    this.setDifficulty(this.difficultyPresets.veteran)
  }

  onModelChange() {
    this.emitChange();
  }

  emitChange() {
    this.onChange.emit(this.difficulty);
    console.log(this.difficulty);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.onToggle.emit();
  }
}