import * as React from 'react';

import { StyledAthleteTableCell, StyledAthleteTableRow } from "./styles";

interface AthleteTableRowInterface {
  name: string;
  muscleSoreness: number;
  sleepQuality: number
}

export const AthleteTableRow: React.SFC<AthleteTableRowInterface> = (props) => {
  return (
    <StyledAthleteTableRow>
      <StyledAthleteTableCell>
        {props.name}
      </StyledAthleteTableCell>
      <StyledAthleteTableCell>
        {props.muscleSoreness}
      </StyledAthleteTableCell>
      <StyledAthleteTableCell>
        {props.sleepQuality}
      </StyledAthleteTableCell>
    </StyledAthleteTableRow>
  )
};

