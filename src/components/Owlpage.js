import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";




function Owlpage(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
 
    const we = props.we
   
   
  return (
    <>
     <div className="owlnav">
     <img className="gray" src='./images/beautiful-clothing-fashion-2498791.svg' alt=""/>
       {
        we>560?<> <Carousel
        responsive={responsive}
        className="carousel-react"
        itemClass="carousel-item-padding-100-px"
      >
         
        <div className="imgpage">
          <img
            id="ground"
            src='./images/joao-silas-SfkLX6fUObk-unsplash.svg'
            alt="t-shert"
          />
        </div>
        <div className="imgpage">
          <img
            id="ground"
            src='./images/joao-silas-SfkLX6fUObk-unsplash.svg'
            alt="t-shert"
          />
        </div>
        <div className="imgpage">
          <img
            id="ground"
            src='./images/joao-silas-SfkLX6fUObk-unsplash.svg'
            alt="t-shert"
          />
        </div>
      </Carousel> </>:<> <Carousel
          responsive={responsive}
          className="carousel-react"
          itemClass="carousel-item-padding-100-px"
        >
           
          <div className="imgpage">
            <img
              id="ground"
              src='./images/joao-silas-SfkLX6fUObk-unsplash2.svg'
              alt="t-shert"
            />
          </div>
          <div className="imgpage">
            <img
              id="ground"
              src='./images/joao-silas-SfkLX6fUObk-unsplash2.svg'
              alt="t-shert"
            />
          </div>
          <div className="imgpage">
            <img
              id="ground"
              src='./images/joao-silas-SfkLX6fUObk-unsplash2.svg'
              alt="t-shert"
            />
          </div>
        </Carousel> </>
       }
        <div className="about">
            <h2>Sale of the <br/>
summer <br/>
collection</h2>
           
                <Link to='/product'>
                    <div><img src='./images/Ellipse 48.svg' alt=""/>
                    <img className="rightsahm" src='./images/noun_Arrow right_2682937.svg' alt=""/>
                    </div>
                <p>Shop now</p>
                </Link>

            
        </div>
        </div>
   
    </>
  );
}

export default Owlpage;
