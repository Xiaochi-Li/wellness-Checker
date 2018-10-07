import * as _ATHLETE_DATA from './_DATA.json';
import {AssosiatedAthelets} from "./DataShap";


function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function associateStaticsToAthlete(athletData: any) {
  const associatesAthletes: AssosiatedAthelets[] = [];
  for (let i = 0; i < athletData.athlete.length; i++) {
    associatesAthletes.push({
      ID: generateUID(),
      athlete: athletData.athlete[i],
      muscleSoreness: Number(athletData.muscleSoreness[i]),
      sleepQuality: Number(athletData.sleepQuality[i])
    })
  }
  return associatesAthletes;
}

export function _getAthletes() {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      athletes: associateStaticsToAthlete(_ATHLETE_DATA)
    }), 1000);
  })
}
