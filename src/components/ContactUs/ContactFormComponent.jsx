import React, { Component } from 'react'
import styled from 'styled-components'

class ContactFormComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <CF>
         <div className="green-contact-form p-5 bg-white">
        
        <div className="form-box">
          <h4>Send Us a Message</h4>
          <form>
            <fieldset className="form-group">
              <label htmlFor="yourName">Your Name (required)</label>
              <input type="text" className="form-control" id="yourName" placeholder="Enter Your Name" required />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="yourEmail">Email Adressess (required)</label>
              <input type="email" className="form-control" id="yourEmail" placeholder="Enter Your Email" required />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="yourPhone">Telephone number</label>
              <input type="text" className="form-control" id="yourPhone" placeholder="Enter Your Phone" />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="yourEmail">Your message (required)</label>
              <textarea className="form-control" rows={3} defaultValue={""} />
            </fieldset>
            <button type="submit" className="btn btn-dark" required>SEND MESSAGE</button>
          </form>
        </div>
      </div>
  
            </CF>
         
         );
    }
}
 
export default ContactFormComponent;

const CF=styled.div`
body {
    font-family: 'Raleway', sans-serif;
    margin-top: 50px;
    background:gainsboro;
     
  }
  
  .green-contact-form {
    width: 60vh;
    margin:0 auto;
    border-radius:10px;
    padding-top:0 !important;
  }
  
 
  
  
`;