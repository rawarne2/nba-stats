import React from 'react';
let Table = require('react-bootstrap').Table;

const PlayerStats = ({ selectedPlayer }) => {
  return (
    <div className='TableBox'>
      {selectedPlayer.playerId ? (
        <div>
          <Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th>Player</th>
                <th>Age</th>
                <th>Points</th>
                <th>Rebounds</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`${selectedPlayer.firstName} ${selectedPlayer.lastName}`}</td>
                <td>{selectedPlayer.age}</td>
                <td>{selectedPlayer.pts}</td>
                <td>{selectedPlayer.reb}</td>
                <td>{selectedPlayer.ast}</td>
              </tr>
            </tbody>
          </Table>
          <img className='PlayerImage' src={selectedPlayer.playerImg} alt='' />
        </div>
      ) : null}
    </div>
  );
};

export default PlayerStats;
