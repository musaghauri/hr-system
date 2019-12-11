import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer footer-black  footer-white ">
        <div className="container-fluid">
          <div className="row">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://www.bitbytes.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    HR System
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.bitbytes.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bitbytes.io/license"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                ©{new Date().getFullYear()}, made with{' '}
                <i className="fa fa-heart heart" /> by BitBytes
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
