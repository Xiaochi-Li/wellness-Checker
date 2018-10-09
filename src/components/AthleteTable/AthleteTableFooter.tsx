import * as React from 'react';
import { connect } from "react-redux";

import { AssociatedAtheists } from "../../utils/DataShape";
import { StyledAthleteTableCell, StyledAthleteTableRow } from "./styles";

interface AthleteTableFooterInterface {
  averageMuscleSoreness: number;
  averageSleepQuality: number;
}

/**
 * the athlete table footer component
 */
const AthleteTableFooter: React.SFC<AthleteTableFooterInterface> = (props) => {
  return (
    <StyledAthleteTableRow>
      <StyledAthleteTableCell>Average</StyledAthleteTableCell>
      <StyledAthleteTableCell>
        {props.averageMuscleSoreness}
      </StyledAthleteTableCell>
      <StyledAthleteTableCell>
        {props.averageSleepQuality}
      </StyledAthleteTableCell>
    </StyledAthleteTableRow>
  )
};

/**
 * map basic athletes data from state to props.
 * @param state
 */
const mapStateToProps = (state: any) => {
  const {athletes} = state.athleteReducer;
  let totalSleepQuality = 0;
  let totalMuscleSoreness = 0;
  let averageMuscleSoreness = 0;
  let averageSleepQuality = 0;

  athletes.forEach((athlete: AssociatedAtheists) => {
    totalSleepQuality += athlete.sleepQuality;
    totalMuscleSoreness += athlete.muscleSoreness;
  });

  if (athletes.length) {
    averageMuscleSoreness = totalMuscleSoreness / athletes.length;
    averageSleepQuality = totalSleepQuality / athletes.length;
  }

  return {
    averageMuscleSoreness,
    averageSleepQuality,
  };
};

export default connect(mapStateToProps)(AthleteTableFooter);
