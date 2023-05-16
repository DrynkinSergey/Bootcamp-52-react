import userData from './assets/user.json'
import { User } from './components/User/User'
import styles from './app.module.css'
import styled from 'styled-components'

function App() {
	let isOpen = true
	const isLoggedIn = true
	if (!isLoggedIn) {
		return <h1>User is not authorize</h1>
	}
	return (
		<>
			<Wrapper>
				{userData.map((user, index) => (
					<User
						key={user.id}
						index={index}
						isOnline={user.isOnline}
						avatar={user.avatar}
						location={user.location}
						username={user.username}
						tag={user.tag}
						stats={user.stats}
					/>
				))}
			</Wrapper>

			{isOpen ? (
				<h1 className={styles.title}>Modal is open</h1>
			) : (
				<h1>Sorry but modal is close</h1>
			)}
			{isOpen && <h1>Welcome</h1>}
			{!isOpen && <h1>Open is false now</h1>}
			<button>CLose / open</button>
		</>
	)
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 30px;
`
export default App
