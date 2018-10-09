import * as React from 'react';

import { StyledAthleteTableHeader, StyledAthleteTableHeaderCell } from "./styles";

/**
 * the athlete table  component
 */
export const AthleteTableHeader: React.SFC = (props) => {
  return (
    <StyledAthleteTableHeader>
      <StyledAthleteTableHeaderCell>Athlete</StyledAthleteTableHeaderCell>
      <StyledAthleteTableHeaderCell>Muscle Soreness</StyledAthleteTableHeaderCell>
      <StyledAthleteTableHeaderCell>Sleep Quality</StyledAthleteTableHeaderCell>
    </StyledAthleteTableHeader>
  )
}
