import userData from './assets/user.json'
import { User } from './components/User/User'
import styles from './app.module.css'
function App() {
	let isOpen = true
	const isLoggedIn = true
	if (!isLoggedIn) {
		return <h1>User is not authorize</h1>
	}
	return (
		<>
			<div className='userList_Wrapper'>
				{userData.map(user => (
					<User
						key={user.id}
						avatar={user.avatar}
						location={user.location}
						username={user.username}
						tag={user.tag}
						stats={user.stats}
					/>
				))}
			</div>

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

export default App
