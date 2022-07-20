import { getByDay, getByMonth } from 'prayertiming';
import { prayersCalc, dayCalc } from 'prayer-timetable-lib';

// const date = new Date('2021-04-24T05:16:54.442Z');
// const timeZone = date.getTimezoneOffset();

// const getDay = getByDay({
//   date,
//   long: 90.38,
//   lat: 23.75,
//   method: 'Karachi',
//   timeFormat: '12h',
// }); // returns and object

 export const getYear = getByMonth({
  month: 6,
  year: 2022,
  long: 10.75,
  lat: 59.9167,
  method: 'MWL',
  timeFormat: '24h',
}); // returns an array of object

// console.log(getDay);59.9167, 10.75
