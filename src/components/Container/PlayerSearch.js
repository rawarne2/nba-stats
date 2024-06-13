import React, { Component } from 'react';
import { fetchPlayerStats, fetchAllPlayers } from '../../redux/actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import PlayerStats from '../Presentational/PlayerStats';
import PropTypes from 'prop-types';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { player: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPlayers();
  }

  handleSubmit(event) {
    this.props.fetchPlayerStats(this.state.player);
  }

  render() {
    return (
      <div className='PlayerSearch'>
        <p>Enter Player Name</p>
        <Typeahead
          className='Search'
          placeholder='Player Search'
          options={this.props.allPlayers}
          id='typeahead-search'
          labelKey={(option) => {
            return `${option.firstName} ${option.lastName}`;
          }}
          renderMenuItemChildren={(option) => (
            <div>
              <span
                style={{ color: 'black', justifyContent: 'center' }}
              >{`${option.firstName} ${option.lastName}`}</span>
            </div>
          )}
          clearButton
          onSubmit={this.handleSubmit}
          onChange={(selected) => {
            this.setState({ player: selected[0] });
          }}
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
        <PlayerStats
          selectedPlayer={this.props.selectedPlayer}
          isFetching={this.props.isFetching}
          striped={this.props.striped}
          bordered={this.props.bordered}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.fullName,
    isFetching: state.isFetching,
    error: state.error,
    playerImg: state.playerImg,
    allPlayers: state.allPlayers,
    selectedPlayer: state.selectedPlayer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerStats,
    fetchAllPlayers,
  };
};

PlayerSearch.propTypes = {
  fullName: PropTypes.string,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  pStats: PropTypes.object,
  playerImg: PropTypes.string,
  allPlayers: PropTypes.array,
  selectedPlayer: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch);

//if player is not found then it uses previously entered player ex: aaron jackson

/*
- make in depth stats listed in a dropdown view
- add tests
- fix error handing / add form validation
- show more button (look at react bootstrap docs)
*/

//full player stats view -- parallax scrolling?
