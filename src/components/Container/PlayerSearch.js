import React, { Component } from 'react'
import { playerInfo, fetchPlayerStats, fetchAllPlayers, fetchPlayerImage } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import PlayerStats from '../Presentational/PlayerStats'

export class PlayerSearch extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllPlayers()
    }

    handleChange (event) {
        this.props.playerInfo(event.target.value)
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.fetchPlayerStats(this.props.fullName)
        this.props.fetchPlayerImage()
    }

    render() {
        return (
            <div>
            <p>Enter Player Name</p>
                <Form 
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}>
                    <input 
                        placeholder="Player Search"
                        type="text"
                    />
                <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
                    <PlayerStats 
                    fullName={this.props.fullName}
                    points={this.props.points}
                    playerImg={this.props.playerImg}
                    isFetching={this.props.isFetching}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fullName: state.fullName,
        isFetching: state.isFetching,
        error: state.error,
        points: state.points,
        playerImg: state.playerImg,
        allPlayers: state.allPlayers
    }
  }
  const mapDispatchToProps = dispatch => {
      return {
          playerInfo,
          fetchPlayerStats,
          fetchAllPlayers,
          fetchPlayerImage
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch)



/**
 * Goals: error handing, change initial stats, dropdown with more stats
 */











//Because of restrictions from the stats.nba.com API and the 'nba' npm package, only one player can be 
//shown at a time when typing in player names



/*
- make in depth stats listed in a dropdown view
- add tests
- fix error handing / add form validation
- use bootstraps for css
- show more button (look at react bootstrap docs)
*/

//full player stats view -- parallax scrolling?