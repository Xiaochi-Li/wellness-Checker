import { FETCH_ATHLETES, fetchAthletes } from '../../../reduxCore/actions/athleteActions'

describe('actions', () => {
  /**
   * test if action is generated.
   */
  it('should create an action to fetch all athletes', () => {
    const MOCK_ATHLETES = [
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
    ];

    const expectedAction = {
      type: FETCH_ATHLETES,
      ...MOCK_ATHLETES
    }
    expect(fetchAthletes(MOCK_ATHLETES)).toEqual(expectedAction);
  })
})
