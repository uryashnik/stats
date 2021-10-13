import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader('src/football.csv');

// Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// maychReader.matches

console.log(`Man United Won ${manUnitedWins} times.`);
