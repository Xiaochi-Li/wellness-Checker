import athleteReducer from "../../../reduxCore/reducers/athleteReducer";

/**
 * test if default state shape is created when no action is triggered.
 */
describe('athleteReducer', () =>{
  it('should return the initial state', () =>{
    const expectedInitialState = {athletes:[]};
    expect(athleteReducer(undefined,{})).toEqual(expectedInitialState);
  })
})
