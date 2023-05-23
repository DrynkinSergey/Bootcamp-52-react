import styled from 'styled-components'

export const StyledHeader = styled.header`
	padding: 40px 20px;
	background-color: deepskyblue;
	font-size: 2rem;
	box-shadow: 2px 2px 4px 0 black;

	margin-bottom: 20px;
	form {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		padding: 20px 0;
		input,
		button {
			box-shadow: 2px 2px 4px 0 black;
		}
		input {
			padding: 10px;
			border-radius: 8px;
			border: none;
		}
		button {
			border: none;
			padding: 10px;
			border-radius: 8px;
			cursor: pointer;
		}
	}
`

export const StyledRepoList = styled.ul`
	display: grid;
	padding: 10px 0;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
	gap: 10px;
`

export const StyledCard = styled.li`
	border-radius: 12px;
	border: 2px solid black;
	padding: 20px 10px;
	box-shadow: 2px 2px 4px 0 black;
`
export const StyledRepoImg = styled.div`
	width: 250px;
	overflow: hidden;
	img {
		width: 100%;
	}
`
