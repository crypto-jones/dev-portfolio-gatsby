import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            Hi! I'm <strong>Jeremy A. Jones</strong>, a full stack developer in
            San Francisco, CA.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
