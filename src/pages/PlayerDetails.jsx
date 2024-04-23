import Header from "../componants/Header"
import {useParams} from 'react-router-dom'



const PlayerDetails = () =>{
   const paramsObject = useParams();
  const playersArray = [
    {
      id: 1,
      name: "Player 1",
      country: "India",
      role: "Batsman"
    },
    {
      id: 2,
      name: "Player 2",
      country: "Australia",
      role: "Bowler"
    }
  ];
  const foundPlayer = playersArray.find((player)=> paramsObject.playerId == player.id)
  return(
    <>
      <Header/>
      <main className="container mt-3">
    <h1>Player Details</h1>
      <div className="card">
        <div className="card-header">
           <h2>{foundPlayer.name}</h2>
        </div>
        <div className="card-body">
           <p><strong>Counry: </strong>{foundPlayer.country}</p>
           <p><strong>Role: </strong>{foundPlayer.role}</p>

        </div>
      </div>
      </main>
    </>
  )
}

export default PlayerDetails