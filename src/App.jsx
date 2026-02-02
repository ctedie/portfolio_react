import React, {useState, useEffect} from 'react'
import Header from './components/entete.jsx'
import Footer from './components/Foooter.jsx'
import Home from './pages/home.jsx'
import './App.css'

import { NavLink } from 'react-router-dom'


function App() {

  const [githubInfos, setGithubInfos] = useState([]);

  const getGithubInfos = async () => {
  const response = await fetch("https://api.github.com/users/github-john-doe");
  const json = await response.json();
  setGithubInfos(json);
}
  useEffect(() => {
    getGithubInfos();
  }, []);

  return (
    <>
  {githubInfos.map(info => (
    <div> {info.id}</div>
  ))}
    {/*}
      <div className="position-sticky top-0">
        <Header />
      </div>
      <Home />
      <Footer /> */}
    </>
  )
}

export default App
