import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaterialModule } from "../material.module";


import { AppComponent } from './app.component';
import { CharacterListComponent } from '../characterList/character-list.component';
import { CharacterFilterPipe } from '../characterList/character-list-filter.pipe';
import { ForceComponent } from '../force/force.component';
import { CharacterService} from "../services/character.service";


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterFilterPipe,
    ForceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
