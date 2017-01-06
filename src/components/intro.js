import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
	    <div className="view hm-black-strong">
	        <div className="full-bg-img flex-center">
	            <div className="container">
	                <div className="row" id="home">

	                    <div className="col-lg-6">
	                        <div className="description">
	                            <h2 className="h2-responsive wow fadeInLeft">Make purchases with our app </h2>
	                            <hr className="hr-dark" />
	                            <p className="wow fadeInLeft" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</p>
	                            <br />
	                            <a className="btn btn-white-outline btn-lg wow fadeInLeft" data-wow-delay="0.7s">Learn more</a>
	                            <a className="btn btn-white-outline btn-lg wow fadeInLeft" data-wow-delay="0.7s">Download <i className="fa fa-android left right" aria-hidden="true"></i>
	                        <i className="fa fa-apple left" aria-hidden="true"></i>
	                        <i className="fa fa-windows" aria-hidden="true"></i></a>
	                        </div>
	                    </div>
	                    <div className="col-lg-4 offset-lg-1 flex-center">
	                        <img 
	                         src="http://mdbootstrap.com/img/Mockups/Transparent/Small/iphone10.png" 
	                         alt="" 
	                         className="img-fluid wow fadeInRight" 
	                         id="app-mockup" 
	                        />
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
    );
  }
}

new WOW().init();
