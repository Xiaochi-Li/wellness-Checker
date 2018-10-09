import * as React from 'react';
import { connect } from "react-redux";

import { AssociatedAtheists } from "../../utils/DataShape";
import AthleteTableFooter from "./AthleteTableFooter";
import { AthleteTableHeader } from "./AthleteTableHeader";
import { AthleteTableRow } from "./AthleteTableRow";
import { StyledAthleteTable } from "./styles";

interface AthleteTableInterface {
  athletes: AssociatedAtheists[];
}

/**
 * the athlete table component
 */
const AthleteTable: React.SFC<AthleteTableInterface> = (props) => {

  /**
   * a helper function to render a list of Table Row components,
   * doing so can make TSX code more readable, and make maintaining
   * the render function easier.
   */
  const renderTableRows = () => {
    return props.athletes.map((athlete: AssociatedAtheists) => {
      return <AthleteTableRow
        key={athlete.ID}
        name={athlete.name}
        muscleSoreness={athlete.muscleSoreness}
        sleepQuality={athlete.sleepQuality}
      />
    })
  };

  return (
    <StyledAthleteTable>
      <tbody>
      <AthleteTableHeader/>
      {renderTableRows()}
      <AthleteTableFooter/>
      </tbody>
    </StyledAthleteTable>
  )
};

/**
 * map basic athletes data from state to props.
 * @param state
 */
const mapStateToProps = (state: any) => {
  return {
    athletes: state.athleteReducer.athletes
  };
};

export default connect(mapStateToProps)(AthleteTable);
