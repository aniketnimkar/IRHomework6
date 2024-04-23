import { Link } from "react-router-dom";
import Footer from "../componants/Footer"
import Header from "../componants/Header"


const Players = () =>{
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
  const PlayersHTMLArray = playersArray.map((player, i)=>(
    <div  key={i} className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-header">
         <h2>{player.name}</h2>
      </div>
      <div className="card-body">
         <p><strong>Counry: </strong>{player.country}</p>
         <p><strong>Role: </strong>{player.role}</p>
        <Link className="btn btn-primary" to={`/players/${i+1}`}>Details</Link>
        
      </div>
    </div>
    </div>
      </div>
  ))
  return(
    <>
      <Header/>
      <main className="container">
    <h1>List of Cricket Players</h1>
        {PlayersHTMLArray}
      </main>
      <Footer/>
    </>
  )
}

export default Players