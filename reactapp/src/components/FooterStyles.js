import styled from 'styled-components';

export const Box = styled.div`
position:fixed;
padding: 10px 50px;
background:#1b2430;
width: 100%;
@media (max-width: 1000px) {
	padding: 60px 30px;
}
`;

export const Container = styled.div`
	height:30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;


export const Heading = styled.p`
font-size: 17px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;

&:hover {
	color: #17cf97;
	transition: 200ms ease-in;
}
`;