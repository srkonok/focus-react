import React, { Component } from "react";
import Slider from "react-slick";

function TestimonialSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider className="testimonial-widget-one" {...settings}>
                <div class="item">
                    <div class="testimonial-content text-right">
                        <div class="testimonial-text">
                            <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <div class="testimonial-author">TYRION LANNISTER</div>
                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp
                                                        </div>
                            </div>
                            <img class="testimonial-author-img ml-3" style={{"width":"50px"}} src={require('../../../../images/avatar/1.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-content text-right">
                        <div class="testimonial-text">
                            <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <div class="testimonial-author">TYRION LANNISTER</div>
                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp
                                                        </div>
                            </div>
                            <img class="testimonial-author-img ml-3" style={{"width":"50px"}} src={require('../../../../images/avatar/1.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="testimonial-content text-right">
                        <div class="testimonial-text">
                            <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <div class="testimonial-author">TYRION LANNISTER</div>
                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp
                                                        </div>
                            </div>
                            <img class="testimonial-author-img ml-3" style={{"width":"50px"}} src={require('../../../../images/avatar/1.png')} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
}


export default TestimonialSlider