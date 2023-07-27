import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{ color: "White",
				textAlign: "center",
				marginTop: "-50px" }}>
		SURVEY GENERATOR
	</h1> */}
	<Container>
		<Row>
		<Column>
			<Link to={"AboutUs"}>
				<Heading>About Us</Heading>
			</Link>
		</Column>
		<Column>
			<Heading>Services</Heading>
		
		</Column>
		<Column>
			<Link to={"Contact"}><Heading>Contact Us</Heading></Link>
		</Column>
		<Column>
			<Heading>Social</Heading>
		</Column>
		<div className="vertical"></div>
		<Column>
		<Heading>Follow us on : </Heading>
		{/* <div className='payment'></div> */}
		</Column>
		<div className="gaja"><pre>
			<img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Lamp" width="32" height="32"></img>     <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Lamp" width="32" height="32"></img>     <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Lamp" width="32" height="32"></img>
		</pre>
		</div>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;