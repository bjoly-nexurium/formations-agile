// eslint-disable-next-line max-classes-per-file
class Line {
  words: string[];

  constructor() {
    this.words = [];
  }

  nextWordIsTooBigForLine(word, sizeLine) {
    return this.words.join(' ').length + word.length > sizeLine;
  }

  addWord(word: string) {
    if (word !== '\n') {
      this.words.push(word);
    }
  }

  toString(): string {
    return this.words.join(' ');
  }
}

export interface SyllableService {
  wordToSyllable(word: string) : Array<string> ;
}

function flatArray(array) {
  // eslint-disable-next-line prefer-spread
  return [].concat.apply([], array);
}

/* eslint-disable class-methods-use-this */
export default class Wrapper {
  syllableService: SyllableService;

  constructor(syllableService: SyllableService) {
    this.syllableService = syllableService;
  }

  wrap(text: string): Array<string> {
    const sizeLine = 25;

    const words = this.createTruncatedWords(text, sizeLine);
    const lines = [new Line()];

    while (words.length > 0) {
      let currentLine = lines[lines.length - 1];
      const word = words.shift();
      if (currentLine.nextWordIsTooBigForLine(word, sizeLine) || word === '\n') {
        currentLine = new Line();
        lines.push(currentLine);
      }
      currentLine.addWord(word);
    }
    return lines.map((line) => line.toString());
  }

  chunkWord(word: string, size: number): Array<string> {
    let syllables = [];
    if (word.length > size) {
      syllables = this.syllableService.wordToSyllable(word);
      if (syllables.length > 1) {
        let shortenedWord = '';
        while (shortenedWord.length + syllables[0].length <= size - 1) {
          shortenedWord = shortenedWord.concat(syllables.shift());
        }
        // eslint-disable-next-line prefer-spread
        return [shortenedWord.concat('-'), syllables.join('')];
      }
    }

    const numChunks = Math.ceil(word.length / size);
    const chunks = new Array(numChunks);
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = word.substr(o, size);
    }
    return chunks;
  }

  createTruncatedWords(text: string, sizeLine: number) : Array<string> {
    const words = text.split(' ');
    const wordArray = words.map((word) => this.chunkWord(word, sizeLine));
    return flatArray(wordArray);
  }
}
