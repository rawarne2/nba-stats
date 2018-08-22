import React, { Component } from 'react'
import { playerInfo, fetchPlayerStats, } from '../redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'


export class PlayerSearch extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange (event) {
        this.props.playerInfo(event.target.value)
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.fetchPlayerStats(this.props.fullName)
    }

    render() {
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
                <h1>2017-18 Average PPG: { this.props.points } </h1>
                <img src={this.props.playerImg} alt={'https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png'}/>
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
        points: state.points,
        playerImg: state.playerImg,
        firstName: state.firstName,
        lastName: state.lastName,

    }
  }
  const mapDispatchToProps = dispatch => {
      return {
          playerInfo,
          fetchPlayerStats,
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch)

//Because of restrictions from the stats.nba.com API and the 'nba' npm package, only one player can be 
//shown at a time when typing in player names


//use a separate component to display the stats <-----------


/*
- make in depth stats listed in a new component view
- add tests
- clean up state
- make better action names
- fix error handing / add form validation
- show more button 
- be able to sort stats in main player view
- use bootstraps for css
- show loading bar when searching (I know it only takes .5sec to load)
*/