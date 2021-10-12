import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader('src/football.csv');

// Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// maychReader.matches

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United Won ${manUnitedWins} times.`);
