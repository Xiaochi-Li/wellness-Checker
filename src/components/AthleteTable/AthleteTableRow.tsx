import * as React from 'react';

import {
  StyledAthleteTableCell,
  StyledAthleteTableCellGreen,
  StyledAthleteTableCellOrange,
  StyledAthleteTableCellRed,
  StyledAthleteTableRow
} from "./styles";

interface AthleteTableRowInterface {
  name: string;
  muscleSoreness: number;
  sleepQuality: number
}

/**
 * the athlete table row component
 */
export const AthleteTableRow: React.SFC<AthleteTableRowInterface> = (props) => {

  /**
   * A helper function to render Row Cell element conditional,
   * doing so can make TSX code clear, increase readability and maintenance.
   * @constructor
   */
  const MuscleColonCell = () => {
    const {muscleSoreness} = props;

    if (muscleSoreness >= 8) {
      return (
        <StyledAthleteTableCellRed>
          {muscleSoreness}
        </StyledAthleteTableCellRed>
      );
    }

    if (5 <= muscleSoreness && muscleSoreness <= 7) {
      return (
        <StyledAthleteTableCellOrange>
          {muscleSoreness}
        </StyledAthleteTableCellOrange>
      );
    }

    return (
      <StyledAthleteTableCell>
        {muscleSoreness}
      </StyledAthleteTableCell>
    );
  };

  /**
   * A helper function to render Row Cell element conditional,
   * doing so can make TSX code clear, increase readability and maintenance.
   * @constructor
   */
  const SleepQualityColonCell = () => {
    const {sleepQuality} = props;

    if (sleepQuality === 10) {
      return (
        <StyledAthleteTableCellGreen>
          {sleepQuality}
        </StyledAthleteTableCellGreen>
      );
    }

    if (sleepQuality <= 3) {
      return (
        <StyledAthleteTableCellRed>
          {sleepQuality}
        </StyledAthleteTableCellRed>
      )
    }
    return (
      <StyledAthleteTableCell>
        {sleepQuality}
      </StyledAthleteTableCell>
    );
  };

  return (
    <StyledAthleteTableRow>
      <StyledAthleteTableCell>
        {props.name}
      </StyledAthleteTableCell>
      {MuscleColonCell()}
      {SleepQualityColonCell()}
    </StyledAthleteTableRow>
  )
};

