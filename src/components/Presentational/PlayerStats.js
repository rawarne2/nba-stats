import React from 'react'

let image = props => (props.isFetching ? 
    <h3>Loading Image...</h3> : 
    <img src={props.playerImg} alt="" />)

const PlayerStats = props => (
    <div>
        <h1>Player: { props.fullName }</h1>
        <h1>2017-18 Average PPG: { props.points } </h1>
        {image(props)}
    </div>
)

//use this but add a clear error function
// const PlayerStats = props => (
//     props.error ? <h1>Player Not Found</h1> :
//     (<div>
//         <h1>Player: { props.fullName }</h1>
//         <h1>2017-18 Average PPG: { props.points } </h1>
//         {image(props)}
//     </div>)
// )

export default PlayerStats

