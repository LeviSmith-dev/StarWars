import { Pipe, PipeTransform} from "@angular/core";
import { Character} from "../model/Character";

@Pipe({
  name: 'characterListFilter'
})
export class CharacterFilterPipe implements PipeTransform{
  transform(characters: Character[], filterBy: string): Character[]{
    filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
    return filterBy ? characters.filter((character: Character) =>
      character.name.toLocaleLowerCase().indexOf(filterBy)!== -1
    ) :characters;
  };
}
