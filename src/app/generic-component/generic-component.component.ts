import { Component } from '@angular/core';
import { GenericArrayOperations } from '../generic-array-operations/generic-array-operations';

@Component({
  selector: 'app-generic-component',
  standalone: true,
  imports: [],
  templateUrl: './generic-component.component.html',
  styleUrl: './generic-component.component.scss'
})
export class GenericComponentComponent {
  filterExampleResult: number[] = [];
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  words = ['Hello','What','when','Hi','How','where','had','do','here','accompany'];
  pairs = ['Hello', 'from', 'Neha'];
  wordsWithH = (words: string): boolean => words.startsWith('H');
  square = (number: number): number => number * number;
  sum = (accumulator: number, value: number): number => accumulator + value;
  sentenceGenerator = (accumulator: string, word: string): string =>
    accumulator + ' ' + word;
  evenNumbers: number[] = [];
  startwith: string[] = [];
  squaredNumbers : number[] = [];
  sumOfNumbers : number | undefined;
  generateSentence: string = '';
  uniqueNumbers : number[] = [];
  flattenArray : any;
  chunkWords : number[][]  | undefined;
  intersection : number[] = [];
  uniqueValuesArray: number[] = [];
  ngOnInit() {
    this.listExample();
  }

  listExample() {
    // Filtering

   
    // const square = (n: number) => n * n;
    // this.filterExampleResult = GenericArrayOperations.map(this.numbers, square);
    this.evenNumbers = GenericArrayOperations.filter(this.numbers, (n) => n % 2 === 0);
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ evenNumbers:", this.evenNumbers)
    
    this.startwith = GenericArrayOperations.filter(this.words, this.wordsWithH);
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ startwith:", this.startwith)
    this.squaredNumbers = GenericArrayOperations.map(this.numbers, this.square);
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ squaredNumbers:", this.squaredNumbers)
    this.sumOfNumbers = GenericArrayOperations.reduce(this.numbers, this.sum, 0);
    console.log('Sum using reducer',this.sumOfNumbers)
    this.generateSentence = GenericArrayOperations.reduce(
      this.pairs,
      this.sentenceGenerator,
      ''
    );
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ generateSentence:", this.generateSentence)
    this.uniqueNumbers = GenericArrayOperations.unique([
      1, 1, 2, 4, 5, 5, 6, 7, 8, 8, 10, 11, 12, 12, 13, 14, 14
    ]);
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ uniqueNumbers:", this.uniqueNumbers)
    this.flattenArray = GenericArrayOperations.flatten([
      [
        { id: 1, name: 'Neha' },
        { id: 2, name: 'Nirvi' },
      ],
      [{ id: 3, name: 'Nairiti' }],
      [
        { id: 4, name: 'Nidhi' },
        { id: 5, name: 'Nimrit' },
      ],
    ]);
    console.log('Flatten Array Example',this.flattenArray)
    this.chunkWords = GenericArrayOperations.chunk(this.numbers, 2);
    console.log('Chunks example', this.chunkWords);
    this.intersection = GenericArrayOperations.intersection(
      [1, 2, 3, 4, 5, 6],
      [2, 4, 6, 7, 8, 9]
    );
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ intersection:", this.intersection)
    this.uniqueValuesArray = GenericArrayOperations.union(
      [2, 3, 4, 5, 6, 10, 11, 13, 15, 17],
      [3, 4, 5, 6, 8, 9, 14, 13]
    );
    console.log("🚀 ~ GenericComponentComponent ~ listExample ~ uniqueValuesArray:", this.uniqueValuesArray)
  }
}
