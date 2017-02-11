/* ===================================

    footer.jsx

======================================*/

import React, { Component } from 'react';

export default class FooterComp extends Component {
  render() {
    console.log('Application Loaded.')
    return (
            <div className="footer-copyright">
                <div className="container-fluid animated slideInUp">
                    
                    <a href="https://github.com/escobard"> <span>2017 Copyright</span> </a>
                </div>
            </div>
    );
  }
}