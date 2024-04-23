import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Players from './pages/Players'
import Report from './pages/Report'
import PlayerDetails from "./pages/PlayerDetails"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/players',
    element:<Players/>
  },
  {
    path: '/players/:playerId',
    element:<PlayerDetails/>
  },
  {
    path: '/report',
    element:<Report/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)