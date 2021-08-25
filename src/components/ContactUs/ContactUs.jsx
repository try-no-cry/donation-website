import React, { Component } from 'react'
import ContactCardComponent from './ContactCardComponent'
import GoogleMapComponent from './GoogleMapComponent'
import styled from 'styled-components'
import ContactFormComponent from './ContactFormComponent'
import MidHorizontalLine from './../MidHorizontalLine';

class ContactUs extends Component {
    state = { contacts:[{id:1,
                         contactImg:"https://source.unsplash.com/155x155",
                         contactName:"Tom Hardy",
                         contactTitle:"BilliMeow",
                         contactEmail:"meowmeow@gmail.com"},
                         {id:2,
                            contactImg:"https://source.unsplash.com/155x155",
                            contactName:"Tom Hardy",
                            contactTitle:"BilliMeow",
                            contactEmail:"meowmeow@gmail.com"},
                        {id:2,
                                contactImg:"https://source.unsplash.com/155x155",
                                contactName:"Tom Hardy",
                                contactTitle:"BilliMeow",
                                contactEmail:"meowmeow@gmail.com"} 
                        ] 
                        
            }
    render() { 
        return (
            <React.Fragment>
            <MyTag>
                <div className="container-fluid mymy ">
                    <div className="row"> 
                  {this.state.contacts.map(contact =>
                   
                        <div className="col-sm"> <ContactCardComponent key={contact.id} contactImg={contact.contactImg} contactName= {contact.contactName}  contactTitle={contact.contactTitle} contactEmail={contact.contactEmail}/></div>
                    
                 )}
                   </div>
                </div>
                
               
            </MyTag>
            <MidHorizontalLine/>
            <br></br>
            <div className="row">
                <div className="col-1"></div>
                
                <div className="col-10">
                    <div className="title-form mb-5">
                    <center><h3>Get in touch</h3></center>
                    <center><p>We’re very approachable and would love to speak to you. Feel free to call, send us an email, Tweet us or simply complete the enquiry form.</p></center>
                    </div>
                </div>

                <div className="col-1"></div>
            </div>



            <div className="container-fluid">
                
           
                <div className="row"> 
                    <div className="col-md-6" style={mapStyle}><GoogleMapComponent/></div>
                    <div className="col-md-6"><ContactFormComponent/></div>
                </div>
            </div>
            </React.Fragment>
          );
    }
}
 
export default ContactUs;

const MyTag=styled.div`
mymy{
    border:2px solid red;
    padding:20vh;
}

body{
    align:center;
}
`;

const mapStyle={
    border:"",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center !important",
    width:"100vh",
    margin:" 0 auto"
    
};


