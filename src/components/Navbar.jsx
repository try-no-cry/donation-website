import React, { Component } from 'react'
import  './../App.css';

class Navbar extends Component {
    state = {  } 
    
    activeNonTransparentNavBg()
      {
        let classVar="navbar navbar-expand-lg fixed-top py-3";
        // if(window.scroll>20) 
        //     return classVar+" active";
        
        return classVar;
            
      }
    render() { 

     
        return ( 
            <nav className="navbar navbar-expand-lg fixed-top py-3">
                 <a className="navbar-brand font-weight-bold" href="#">DonateChanda</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                 </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav ml-auto">

                        <li class="nav-item active">
                          <a class="nav-link pr-5 font-weight-bold" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link pr-5 font-weight-bold" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link pr-5 font-weight-bold" href="#">Contact Us</a>
                        </li>
                        
                      </ul>
                </div>
                        
             </nav>
    
        );
    }
}
 
export default Navbar;