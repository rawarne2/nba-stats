// import { loadPlayer, LOAD_PLAYER } from './actions'

const initialState = {
    firstName: '',
    lastName: '',
    playerId: 0,
    teamId: 0,
    fullName: '',
    downcaseName: ''
  }

  const playerInfoReducer = (state = initialState, action) => {
    switch(action.type) {
      case "LOAD_PLAYER":
        return Object.assign({}, state, action.payload)
      default:
        return state
    }
  };
  
  export default playerInfoReducer;