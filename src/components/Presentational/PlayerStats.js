import React from 'react'
let Table = require('react-bootstrap').Table

const PlayerStats = props => (
    <div className="TableBox">
    { props.pStats.age ?
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
                <td>{props.pStats.playerName}</td>
                <td>{props.pStats.age}</td>
                <td>{props.pStats.pts}</td>
                <td>{props.pStats.reb}</td>
                <td>{props.pStats.ast}</td>
            </tr>
        </tbody>
    </Table>
    {props.isFetching ? 
        <h3>Loading Image...</h3> : 
        <img className="PlayerImage" src={props.playerImg} alt="" />}
    </div>
    : null
    }
    </div>
)

export default PlayerStats

