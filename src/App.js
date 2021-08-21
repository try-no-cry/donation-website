// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo'
import CardComponent from './components/CardComponent';
import Carousel from 'react-elastic-carousel';
import  { Component } from 'react';
import ProfileComponent from './components/ProfileComponent';
import '../src/componentsCSS/ProfileComponentStyle.css';
import FooterComponent from './components/FooterComponent';
 
 
class App extends Component{
    state = {  OurWorkCards:[{id:1,
                       imageUrl:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
                       imageDesc:"Some image desc"},
                       {id:2,
                        imageUrl:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
                        imageDesc:"Some image desc"},
                        {id:3,
                         imageUrl:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
                         imageDesc:"Some image desc"}
                     ],
               profileCards:[{id:1,
                imageUrl:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
                name:"John Doe",
                designation:"Some image desc"},
                {id:2,
                 imageUrl:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
                 name:"John Doe",
                 designation:"Some image desc"},
                 {id:3,
                  imageUrl:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
                  name:"John Doe",
                  designation:"Some image desc"}
              ],      
            
           
                    };

   

  
    render(){
        
        const breakPoints=[
            {width:500,itemsToShow:1},
            {width:768,itemsToShow:2} ,
            {width:1200,itemsToShow:3},
            {width:1500,itemsToShow:4},
            {width:1800,itemsToShow:5},
            {width:1900,itemsToShow:6},
            {width:2000,itemsToShow:7} ,
            {width:2200,itemsToShow:8}
         ];
        
          
             
     return (
         
         <React.Fragment>
                 <Navbar/>
                <BackgroundVideo/> 
                <hr></hr>
                <center><h3><u>Some of our works</u></h3></center> 
                <Carousel breakPoints={breakPoints}>
                    {this.state.OurWorkCards.map(OurWorkCard => <CardComponent key={OurWorkCard.id} imageUrl={OurWorkCard.imageUrl} imageDesc={OurWorkCard.imageDesc}/>)}
                </Carousel>
                
                
                    <div class="profileCont">
                        <div class="row">
                        {this.state.profileCards.map(profileCard => <ProfileComponent key={profileCard.id} imageUrl={profileCard.imageUrl} name={profileCard.name} designation={profileCard.designation}/>)}

                        </div>
                    </div>  
                    <br/>
                    <br/>
               
                <div>
                    <FooterComponent/>
                </div>
               
         </React.Fragment>
     )
 }
 
}
  
export default App;