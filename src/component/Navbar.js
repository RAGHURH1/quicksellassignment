import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Display
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Sorry I was able to complete one option in given time</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
