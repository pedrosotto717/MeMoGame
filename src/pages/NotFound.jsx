import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/not-found.css'

export const NotFound = () => (
  <div className="not-found-container">
    <section className="container not-found">
      <h1 className="not-found--title">NotFound</h1>
      <Link to="/" className="btn--main">
        Go To Home
      </Link>
    </section>
  </div>
)
