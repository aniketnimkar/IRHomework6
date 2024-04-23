import Header from "../componants/Header"

const Report = () =>{
  return(
    <>
      <Header/>
      <section className='container mt-3'>
        <h1>Player Report</h1>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <h5 className='card-header'>Top Scorer</h5>
              <div className='card-body'>
                <p><strong>Name: </strong>Player 1</p>
                <p><strong>Total Runs: </strong>12000</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <h5 className='card-header'>Best Bowler</h5>
              <div className='card-body'>
                <p><strong>Name: </strong>Player 2</p>
                <p><strong>Total Wickets: </strong>500</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Report