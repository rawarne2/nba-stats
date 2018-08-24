import React from 'react'


const PlayerStats = props => (
        <div>
            <h1>Player: { props.fullName }</h1>
            <h1>2017-18 Average PPG: { props.points } </h1>
            <img src={props.playerImg} alt="" />
        </div>
    )
export default PlayerStats

