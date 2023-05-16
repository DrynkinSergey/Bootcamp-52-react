import styled from 'styled-components'
const Card = styled.div`
	border: 2px solid black;
	padding: 25px 10px;
	width: 25%;
	border-radius: 8px;
	background-color: ${props =>
		props.cardIndex % 2 === 0 ? 'lightblue' : 'white'};
`
const NameStyled = styled.h1`
	font-style: italic;
	color: blue;
	span {
		color: black;
	}
	&:hover {
		color: red;
		cursor: pointer;
		span {
			color: red;
		}
	}
`
const Location = styled.h2`
	color: green;
`
const Status = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-color: ${props => (props.status ? 'green' : 'red')};
`

export const UserStyles = {
	Location,
	NameStyled,
	Card,
	Status,
}
