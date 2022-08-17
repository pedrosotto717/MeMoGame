import React from 'react'
import { Link } from 'react-router-dom'
import { GiPlayButton } from 'react-icons/gi'

import '../styles/home.css'

export const Home = () => {
  console.log('#HOME')
  return (
    <div className="home-container">
      <section className="container home">
        <h1 className="home--title">MeMo Game</h1>
        <Link to="/new-game" className="btn--main">
          Start <GiPlayButton className="icon" />
        </Link>
      </section>
    </div>
  )
}
