import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import Login from './components/Login'
import Feed from './components/Feed'
import NewUser from './components/NewUser'

import './styles/App.css'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/feed" element={<Feed/>} />
              <Route path="/register" element={<NewUser/>} />
              <Route path="/" element={<Login/>} />
          </Routes>
      </Router>
  );
}

export default App;
