import React, { Component } from 'react';

export default class FooterComp extends Component {
  render() {
    return (
            <div className="footer-copyright">
                <div className="container-fluid">
                    <span>© 2017 Copyright:</span>
                    <a href="https://github.com/escobard"> Daniel Escobar</a>
                </div>
            </div>
    );
  }
}