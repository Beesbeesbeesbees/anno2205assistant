import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DifficultyPresetsService } from 'src/domain/difficulty-presets';

import { AppComponent } from './app.component';
import { DifficultyComponent } from './difficulty/difficulty.component';

@NgModule({
  declarations: [
    AppComponent,
    DifficultyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DifficultyPresetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
