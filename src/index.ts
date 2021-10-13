import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalyzer } from './analyzers/WinsAnalyzes';
import { ConsoleReport } from './reportTargets/ConnsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';
// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader('src/football.csv');

// Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(
//   new WinsAnalyzer('Man United'),
//   new ConsoleReport()
// );
// const summary = new Summary(new WinsAnalyzer('Man United'), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);
