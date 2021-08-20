import React, { Component } from 'react';
import '../componentsCSS/CardComponentStyle.css';
 

class CardComponent extends Component {
    state = { imageURL:"", texts:"" }
    render() { 

        return (
          <div className="container">
          <div className="row ">
            <div className="col-12 ">
               
              <div className="card mycardct box effect7" style={{width: '18rem'}}>
                <img className="card-img-top mycardct" src={this.props.imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">{this.props.imageDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
);
    }
}
 

 
export default CardComponent;