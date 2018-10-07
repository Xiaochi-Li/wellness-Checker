// import {AssociatedAtheists} from "../../utils/DataShap";
import {FETCH_IMAGES} from "../actions/athleteActions";

export default function athleteReducer(state = {athletes:[]},action:any){
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        ...action.athletes
      };
    default:
      return {...state};
  }
}
