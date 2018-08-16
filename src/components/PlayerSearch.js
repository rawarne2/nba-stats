import React, { Component } from 'react'
import { fetchPlayer, fetchPlayerStats, removeStats } from '../redux/actions'
import { connect } from 'react-redux'


export class PlayerSearch extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.props.fetchPlayer(event.target.value)
        // this.props.fetchPlayerStats(this.props.points)
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.fetchPlayerStats(this.props.fullName)
        // this.props.removeStats()
    }

    render() {
        // console.log("PROPS",this.props)
        return (
            <div>
                <p>please use correct spelling</p>
                <form 
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}>
                    <input 
                        placeholder="Player Search"
                        type="text"
                    />
                </form>
                <h1>Player: { this.props.fullName }</h1>
                <h1>Points: { this.props.points } </h1>
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
        error: state.error,
        points: state.points
    }
  }
  const mapDispatchToProps = dispatch => {
      return {
          fetchPlayer,
          fetchPlayerStats,
          removeStats
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch)

//Because of restrictions from the stats.nba.com API and the 'nba' npm package, only one player can be 
//shown at a time when typing in player names

//figure out how to load a picture
//have a box to enter first name and a box for last name


/*
    This component should allow users to search for a player and get thier ID, name and some basic info. Then you should be able to 
    click on the name to get a more in depth look at the player's stats. 
*/
