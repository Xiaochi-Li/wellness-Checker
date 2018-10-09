import * as _ATHLETE_DATA from './_DATA.json';
import { AssociatedAtheists } from "./DataShape";

/**
 * Generate a random ID.
 */
const generateUID = () => {
  return Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15);
};

/**
 * assign ID, muscleSoreness value and sleepQuality to each athlete
 * @param athleteData original data set.
 */
const associateStaticsToAthlete = (athleteData: any) => {
  const associatesAthletes: AssociatedAtheists[] = [];
  for (let i = 0; i < athleteData.athlete.length; i++) {
    associatesAthletes.push({
      ID: generateUID(),
      muscleSoreness: Number(athleteData.muscleSoreness[ i ]),
      name: athleteData.athlete[ i ],
      sleepQuality: Number(athleteData.sleepQuality[ i ])
    })
  }
  return associatesAthletes;
};

/**
 * return Promise for providing formatted athlete data set
 */
export const getAthletes = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      athletes: associateStaticsToAthlete(_ATHLETE_DATA)
    }), 1000);
  })
};
