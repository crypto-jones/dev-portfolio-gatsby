import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://github.com/crypto-jones"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeremyalexanderjones/"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@jeremy.a.jones"
                className="icon fa-medium"
                target="_blank"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:jeremyjones.a@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Jeremy A. Jones</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
