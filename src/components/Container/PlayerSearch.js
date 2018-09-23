import React, { Component } from 'react'
import { playerInfo, fetchPlayerStats, fetchAllPlayers, fetchPlayerImage } from '../../redux/actions'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import PlayerStats from '../Presentational/PlayerStats'
import PropTypes from 'prop-types'

export class PlayerSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guess: false, 
            typedName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllPlayers()
    }

    handleChange (input) {
        if(input){
            this.props.playerInfo(input)
        }
        this.setState({ typedName: input })
        console.log(input)
    }

    handleSubmit (event) {
        this.props.playerInfo(this.state.typedName)
        this.props.fetchPlayerStats(this.props.fullName)
        this.props.fetchPlayerImage()
        if (this.state.typedName.toLowerCase() !== this.props.fullName.slice(0, this.state.typedName.length).toLowerCase()) {
            this.setState({ guess: true })
        }
        else {
            this.setState({ guess: false })
        }
        this.setState({ typedName: '' })
    }

    render() {
        return (
            <div className="PlayerSearch">
            <p>Enter Player Name</p>
                <Typeahead className="Search"
                    placeholder="Player Search"
                    options={this.props.allPlayers.map(player => player.playerName)}
                    selectHintOnEnter
                    onSubmit={this.handleSubmit}
                    onInputChange={this.handleChange}
                    clearButton
                />
                <Button onClick={this.handleSubmit}>Submit</Button>
                {this.state.guess ? <h3>Best Guess Below</h3> : null}
                <PlayerStats 
                    fullName={this.props.fullName}
                    pStats={this.props.pStats}
                    playerImg={this.props.playerImg}
                    isFetching={this.props.isFetching}
                    striped={this.props.striped}
                    bordered={this.props.bordered}
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
        pStats: state.pStats,
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

  PlayerSearch.propTypes = {
      fullName: PropTypes.string, 
      isFetching: PropTypes.bool, 
      error: PropTypes.string, 
      pStats: PropTypes.object,
      playerImg: PropTypes.string,
      allPlayers: PropTypes.array
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch)



/**
 * Goals: error handing, change initial stats, dropdown with more stats
 */



/*
- make in depth stats listed in a dropdown view
- add tests
- fix error handing / add form validation
- use bootstraps for css
- show more button (look at react bootstrap docs)
*/

//full player stats view -- parallax scrolling?
