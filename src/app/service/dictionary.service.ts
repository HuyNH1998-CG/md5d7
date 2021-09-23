import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Word[] = [{
    id: 1,
    english: 'dog',
    vietnamese: 'cho'
  }, {
    id: 2,
    english: 'cat',
    vietnamese: 'meo'
  }]

  constructor() {
  }

  findWordById(id: number) {
    return this.dictionary.find(item => item.id == id)
  }
}
