import './App.css'
import Header from "./componants/Header"
import Footer from "./componants/Footer"
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header/>
    <main>
         <img src='https://placehold.co/1400x400?text=Players+Banners' className='img-fluid' />
      <section className='text-center bg-body-tertiary py-5'>
          <h2 className=''>Cricket Player Database</h2>
          <p>Explore the profites of your favorite cricket players.</p>
        <Link className='btn btn-primary'>Explore Players</Link>
      </section>
      <section className='text-center mt-5 mb-5'>
          <h2>Players Report</h2>
          <p>Explore the latest players report to gain insights into our ICCC's performance and growth.</p>
        <Link className='btn btn-primary'>View Report</Link>
      </section>
    </main>
      <Footer/>
    </>
  )
}
