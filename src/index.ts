import fs from 'fs';

const matches = fs
  .readFileSync('src/football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log('fottbl: ', matches);
