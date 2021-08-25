import React from 'react'
// import '../../componentsCSS/ContactCardComponentStyle.css';
import styled from 'styled-components';

export default function ContactCardComponent(props) {
    const {contactImg,contactName,contactTitle,contactEmail}=props;
    return (
        <React.Fragment>
        <Div>
		<div className="card p-3 m-2">
			<div className="d-inline-flex align-items-center">
			<div className="image"> <img src={contactImg} className="rounded" width={155} /> </div>
			<div className="ml-3 w-100">
				<h4 className="mb-0 mt-0">{contactName}</h4> <span>{contactTitle}</span>
				<div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
				<div className="d-flex flex-column"> <span className="articles">Email:</span> <span className="number1">{contactEmail}</span> </div>
				</div>
				{/* <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Chat</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div> */}
			</div>
			</div>

			 
        </div>
        
		</Div>
      
      
      
        </React.Fragment>
      
      )
}

const Div = styled.span`
/* for card */
.card {
    width: 400px;
    border: none;
	// border:2px solid red;
    border-radius: 10px;
	background-color: #eeeeee;
	background-image: linear-gradient(45deg, #eeeeee 0%, #88f5ec 100%);

}
	
.stats {
	background-color: #eeeeee;
	background-image: linear-gradient(135deg, #eeeeee 37%, #88f5ec 100%);
    color: #000 !important
}

.articles {
    font-size: 10px;
    color: #a1aab9
}

.number1 {
    font-weight: 500
}

.followers {
    font-size: 10px;
    color: #a1aab9
}

.number2 {
    font-weight: 500
}

.rating {
    font-size: 10px;
    color: #a1aab9
}

.number3 {
    font-weight: 500
}
/* for card end*/  
`;
