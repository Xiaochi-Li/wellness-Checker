import { FETCH_ATHLETES } from "../../../reduxCore/actions/athleteActions";
import athleteReducer from "../../../reduxCore/reducers/athleteReducer";


describe('athleteReducer', () => {
  /**
   * test if default state shape is created when no action is triggered.
   */
  it('should return the initial state', () => {
    const expectedInitialState = {athletes: []};
    expect(athleteReducer(undefined, {})).toEqual(expectedInitialState);
  })

  /**
   * test if initial data can be load into redux core.
   */
  it('should load athlete data', () => {
    const testAthleteAction = {
      type: FETCH_ATHLETES,
      athletes: [
        {
          ID: "aqmr4of9239gk3z4l6gu2u",
          muscleSoreness: 5,
          name: "Jamie Anderson",
          sleepQuality: 5
        },
        {
          ID: "8x8yksncuybyjp30enpmiq",
          muscleSoreness: 6,
          name: "William Brown",
          sleepQuality: 6
        }
      ]
    };
    const expectedState = {
      athletes: [
        {
          ID: "aqmr4of9239gk3z4l6gu2u",
          muscleSoreness: 5,
          name: "Jamie Anderson",
          sleepQuality: 5
        },
        {
          ID: "8x8yksncuybyjp30enpmiq",
          muscleSoreness: 6,
          name: "William Brown",
          sleepQuality: 6
        }
      ]
    };
    expect(athleteReducer(undefined, testAthleteAction)).toEqual(expectedState);
  })
});
