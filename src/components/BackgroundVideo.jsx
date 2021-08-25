import React, { Component } from 'react'
 
import  './../App.css';

class BackgroundVideo extends Component {
    state = {  }
    render() { 
        return ( 
             <React.Fragment>
                 <div className="bg-video-wrap">
                 <header>
          {/* This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS */}
          <div className="overlay" />
          {/* The HTML5 video element that will create the background video on the header */}
          <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
          </video>
          {/* The header content */}
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h3 className="display-3">Help People in <mark>Need.</mark><h5 className="pt-2 pb-2"> Your donation can make a real difference in your community.</h5></h3>
                <p className="lead mb-0">
                    <button className="btn btn-danger draw">Donate Now!</button>
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* Page section example for content below the video header */}
                <blockquote className="blockquote">
                    <p style={{  }}>Nobody made a greater mistake than he who did nothing because he could only do a little.</p>
                </blockquote>
        
    
                  </div>
             </React.Fragment>

         );
    }
}
 
export default BackgroundVideo;