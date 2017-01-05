import React, { Component } from 'react';

export default class FooterComp extends Component {
  render() {
    return (
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-6">
                    <h5 class="title">Footer Content</h5>
                    <p>Here you can use rows and columns here to organize your footer content.</p>
                </div>

                <div class="col-md-6">
                    <h5 class="title">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        
        <div class="footer-copyright">
            <div class="container-fluid">
                <span>© 2015 Copyright:</span>
                <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
            </div>
        </div>
        </div>
        
    );
  }
}