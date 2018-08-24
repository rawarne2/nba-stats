import playerInfoReducer from './reducers'

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(playerInfoReducer(undefined, {})).toEqual({
            firstName: '', 
            lastName: '',
            playerId: 0,
            teamId: 0,
            fullName: '',
            isFetching: false,
            error: '',
            points: 0,
            playerImg: null
          })
    })
})