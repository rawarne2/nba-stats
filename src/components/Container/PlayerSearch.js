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
            noFound: false, 
            typedName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllPlayers()
    }

    
    handleChange (input) {
        let val = document.getElementsByClassName('rbt-input-main')[0].value
            this.setState({ typedName: val })
    }

    handleSubmit (event) {
        if(this.props.allPlayers.map(player => player.playerName).indexOf(this.state.typedName) === -1){
            this.setState({ noFound: true })
        }
        else {
            this.props.playerInfo(this.state.typedName)
            this.props.fetchPlayerStats(this.state.typedName)
            this.props.fetchPlayerImage()
            this.setState({ noFound: false })
        }

    }

    render() {
        return (
            <div className="PlayerSearch">
            <p>Enter Player Name</p>
                <Typeahead className="Search"
                    placeholder="Player Search"
                    options={this.props.allPlayers.map(player => player.playerName)}
                    selectHintOnEnter
                    onInputChange={this.handleChange}
                    clearButton
                    onBlur={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <Button onClick={this.handleSubmit}>Submit</Button>
                {this.state.noFound ? <h1>PLAYER NOT FOUND</h1> : null}
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



//if player is not found then it uses previously entered player ex: aaron jackson



/*
- make in depth stats listed in a dropdown view
- add tests
- fix error handing / add form validation
- show more button (look at react bootstrap docs)
*/

//full player stats view -- parallax scrolling?
