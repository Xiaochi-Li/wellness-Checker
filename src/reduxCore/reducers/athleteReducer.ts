import {FETCH_ATHLETES} from "../actions/athleteActions";

const INITIAL_STATE = {athletes:[]};

export default function athleteReducer(state = INITIAL_STATE, action:any){
  switch (action.type) {
    case FETCH_ATHLETES:
      return {
        ...state,
        athletes:action.athletes
      };
    default:
      return {...state};
  }
}
