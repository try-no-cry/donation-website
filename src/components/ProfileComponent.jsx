import React, { Component } from 'react'
import '../componentsCSS/ProfileComponentStyle.css';

class ProfileComponent extends Component {
    state = {  }
    render() { 
        const {imageUrl,name,designation}=this.props;

        return ( 
             
                
                    <div class="col-md-4">
                         
                        <hr/>
                        <div class="profile-card-4 text-center"><img src={imageUrl} class="img img-responsive"/>
                            <div class="profile-content">
                                <div class="profile-name">{name}
                                    <p>{designation}</p>
                                </div>
                                <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                
                            </div>
                         </div>

                    </div>
                

         );
    }
}
 
export default ProfileComponent;