import React from 'react'
// import { Table } from 'react-bootstrap'
let Table = require('react-bootstrap').Table

let image = props => (props.isFetching ? 
    <h3>Loading Image...</h3> : 
    <img src={props.playerImg} alt="" />)

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
                <td>{props.fullName}</td>
                <td>{props.pStats.age}</td>
                <td>{props.pStats.pts}</td>
                <td>{props.pStats.reb}</td>
                <td>{props.pStats.ast}</td>
            </tr>
        </tbody>
    </Table>
    {props.isFetching ? 
        <h3>Loading Image...</h3> : 
        <img src={props.playerImg} alt="" />}
    </div>
    : 
    <Table  striped bordered condensed hover responsive>
        <thead>
            <tr>
                <th>Player</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.fullName}</td>
            </tr>
        </tbody>
    </Table>
    }
    </div>
)

export default PlayerStats

