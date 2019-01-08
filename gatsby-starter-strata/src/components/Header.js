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
          <h1>Jeremy A. Jones</h1>
          <h3>Full Stack Developer</h3>
          <h3>San Francisco, CA</h3>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
