import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      

        <div className="container" style={mapStyle}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.9834751482824!2d72.90201265979759!3d19.03406950597242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f914f4c68d%3A0x235db0d63d4c6b9!2sID%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1613643276515!5m2!1sen!2sin" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
       
    );
  }
}

export default GoogleMapComponent;

const mapStyle={
     
};