import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import Login from './components/Pages/Login'
import Feed from './components/Pages/Feed'
import NewUser from './components/Pages/NewUser'
import Profile from './components/Profile/Profile'

import './styles/App.css'

function App() {
  return (
      <div className={"appContent"}>
          <Router>
              <Routes>
                  <Route path="/login" element={<Login/>} />
                  <Route path="/feed" element={<Feed/>} />
                  <Route path="/register" element={<NewUser/>} />
                  <Route path="/" element={<Login/>} />
                  <Route path="/profile" element={<Profile/>} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
