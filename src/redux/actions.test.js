import * as types from './actionTypes'
import * as actions from './actions'

describe('action creators',() => {
    it('should create an action to request a player', () => {
        expect(actions.requestPlayer()).toEqual({
            type: types.REQUEST_PLAYER
          })
    })
    it('should create an action to add a player', () => {
        let name = "Stephen Curry"
        expect(actions.foundPlayer(name)).toEqual({
            type: types.FOUND_PLAYER,
            payload: name
        })
    })
    it('should create an action to add stats', () => {
        let stats
        expect(actions.foundStats(stats)).toEqual({
            type: types.FOUND_STATS,
            payload: stats
        })
    })
})