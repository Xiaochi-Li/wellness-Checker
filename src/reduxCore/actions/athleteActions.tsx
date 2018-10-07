import {Dispatch} from "redux";

import {getAthletes} from "../../utils/apiSimulator";
import {AssociatedAtheists} from "../../utils/DataShap";

/**
 * action type
 */
export const FETCH_IMAGES = 'FETCH_IMAGES';

/**
 * action creator for FETCH_IMAGES
 * @param athletes
 */
export const fetchAthletes = (athletes: AssociatedAtheists) => {
  return {
    type: FETCH_IMAGES,
    athletes
  }
};

/**
 * helper function fetch all initial athletes data
 * @param dispatch
 */
export const handleFetchAthletes = (dispatch: Dispatch) => {
  return getAthletes().then((athletes: AssociatedAtheists) => {
      dispatch(fetchAthletes(athletes));
    }
  )
};
