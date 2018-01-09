import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService{
  private characters: Character[];
  constructor(){}
  getCharacters(): Character[]{
    return;
  }
}
