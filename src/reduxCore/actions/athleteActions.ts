import { Dispatch } from "redux";

import { getAthletes } from "../../utils/apiSimulator";
import { AssociatedAtheists } from "../../utils/DataShape";

/**
 * action type
 */
export const FETCH_ATHLETES = 'FETCH_ATHLETES';

/**
 * action creator for FETCH_IMAGES
 * @param athletes
 */
export const fetchAthletes = (athletes: AssociatedAtheists[]) => {
  return {
    type: FETCH_ATHLETES,
    ...athletes
  }
};

/**
 * helper function fetch all initial athletes data
 * @param dispatch
 */
export const handleFetchAthletes = (dispatch: Dispatch) => {
  return getAthletes().then((athletes: AssociatedAtheists[]) => {
      dispatch(fetchAthletes(athletes));
    }
  )
};
