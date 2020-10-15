import { expect } from 'chai';
import Wrapper, { SyllableService } from '../src/Wrapper';

class MockSyllableService implements SyllableService {
  // eslint-disable-next-line class-methods-use-this
  wordToSyllable(word: string): string[] {
    if (word === 'psychopharmacothérapeutique') {
      return ['psy', 'cho', 'phar', 'ma', 'co', 'thé', 'ra', 'peu', 'ti', 'que'];
    }
    return [word];
  }
}

const wrapper = new Wrapper(new MockSyllableService());

describe('Wrapper de texte', () => {
  it('should wrap my Text!', () => {
    const textWrappen = wrapper.wrap('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    expect(textWrappen).deep.equal([
      'hhhhhhhhhhhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhhhhhhhhhhh',
    ]);
  });
  it('should wrap my longer Text!', () => {
    const textWrappen = wrapper.wrap('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    expect(textWrappen)
      .deep.equal(['hhhhhhhhhhhhhhhhhhhhhhhhh',
        'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'hhhhhhhhhhhhhhhhhhhhhhhhh']);
  });
  it('should wrap my longer Text with other chars !', () => {
    const textWrappen = wrapper.wrap('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
    expect(textWrappen)
      .deep.equal(['zzzzzzzzzzzzzzzzzzzzzzzzz', 'zzzzzzzzzzzzzzzzzzzzzzz']);
  });

  it('should wrap my longer Text but not split words !', () => {
    const textWrappen = wrapper.wrap('Lorem ipsum dolor, sit amet consectetur adipisicing elit.');
    expect(textWrappen).deep.equal([
      'Lorem ipsum dolor, sit',
      'amet consectetur',
      'adipisicing elit.',
    ]);
  });

  it('should wrap another long text but not split words !', () => {
    const textWrapped = wrapper.wrap('Culpa omnis voluptatibus velit laudantium fugit exercitationem corrupti.');
    expect(
      textWrapped,
    ).deep.equal([
      'Culpa omnis voluptatibus',
      'velit laudantium fugit',
      'exercitationem corrupti.',
    ]);
  });

  it('should wrap another long text even with end-line !', () => {
    const textWrapped = wrapper.wrap('Culpa omnis voluptatibus velit \n laudantium fugit exercitationem corrupti.');
    expect(
      textWrapped,
    ).deep.equal([
      'Culpa omnis voluptatibus',
      'velit',
      'laudantium fugit',
      'exercitationem corrupti.',
    ]);
  });
});

// hexakosioihexekontahexaphobie -> la peur du nombre 666
// glycosylphosphatidyléthanolamine
// psychopharmacothérapeutique
// supercalifragilisticexpialidocious
describe('Create Truncated Words', () => {
  it('should truncate too long words', () => {
    expect(wrapper.createTruncatedWords('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh dddd', 25))
      .deep.equal([
        'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'dddd',
      ]);
  });
});

describe('wrapper', () => {
  it('should truncate words depending on external service', () => {
    const textWrapped = wrapper.createTruncatedWords('psychopharmacothérapeutique', 25);
    expect(textWrapped)
      .deep.equal([
        'psychopharmacothérapeuti-',
        'que',
      ]);
  });
});
