import React, { Component } from 'react';

export default class FooterComp extends Component {
  render() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <h5 className="title">Footer Content</h5>
                        <p>Here you can use rows and columns here to organize your footer content.</p>
                    </div>

                    <div className="col-md-6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    <span>© 2015 Copyright:</span>
                    <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                </div>
            </div>
        </div>
    );
  }
}