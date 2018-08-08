import React, { Component } from 'react'
import { fetchPlayer } from '../redux/actions'
import { connect } from 'react-redux'


export class PlayerSearch extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        this.props.fetchPlayer(event.target.value)
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <p>please use fullname of player with correct spelling</p>
                <form>
                    <input 
                        placeholder="Player Search"
                        onChange={this.handleChange}
                        type="text"
                    />
                </form>
                <h1>Player ID: { this.props.playerId }</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerId: state.playerId,
        teamId: state.teamId,
        fullName: state.fullName,
        isFeching: state.isFeching,
        error: state.error
    }
  }
  const mapDispatchToProps = dispatch => {
      return {
          fetchPlayer
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch)

//Because of restrictions from the stats.nba.com API and the 'nba' npm package, only one player can be 
//shown at a time when typing in player names


/*
    This component should allow users to search for a player and get thier ID, name and some basic info. Then you should be able to 
    click on the name to get a more in depth look at the player's stats. 
*/
